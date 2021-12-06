import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ElementRef, ViewChild } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements AfterViewInit, OnInit {

  constructor(private data: DataService) { }
  subscription: Subscription
  @ViewChild('rend') rend: ElementRef;
  renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()

  animnum: number = 0;

  model: any
  mixer: any
  clip: any
  action: any
  controls: any
  scene: any
  camera: any
  clock: any
  obj: any
  message: string
  ngOnInit(): void { }

  ngAfterViewInit(): void {

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rend.nativeElement.appendChild(this.renderer.domElement);

    this.subscription = this.data.currentMessage.subscribe((message: string) => {
      this.message = message
      this.basla()
     
    })
  }


  basla(): void {
    alert("11111111111111111111")
    this.scene = new THREE.Scene();
    this.scene.clear();
    this.scene.background = new THREE.Color(0xbfe3dd);
    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    this.camera.position.set(-1, 0.8, 5);


    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.controls.minDistance = 1;
    this.controls.maxDistance = 10000;

    window.addEventListener( 'resize', this.onWindowResize, false );

    this.scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);
    
    const texture = new THREE.TextureLoader().load( 'assets/backrounds/nz.png' );
    const material = new THREE.MeshBasicMaterial( { map: texture } );
    const geometry = new THREE.PlaneGeometry(10, 10);
    const plane = new THREE.Mesh(geometry, material);
    plane.position.set(0, 0, -5);
    this.scene.add(plane);


    const texture2 = new THREE.TextureLoader().load( 'assets/backrounds/nz.png' );
    const material2 = new THREE.MeshBasicMaterial( { map:texture2,side: THREE.BackSide } );
    const geometry2 = new THREE.PlaneGeometry(10, 10);
    const plane2 = new THREE.Mesh(geometry2, material2);
    plane2.rotateY( - Math.PI / 2 );
    plane2.position.set(-5, 0, 0);
    this.scene.add(plane2);

    const loader = new GLTFLoader().setPath("assets/" + this.message.toLowerCase() + "/skin2/");
    loader.load("skin2.gltf", (obj) => {
      this.obj = obj
      this.model = this.obj.scene
      this.model.position.set(0, 0, 0);
      this.model.scale.set(0.01, 0.01, 0.01);
      this.scene.add(this.model)
       this.oynat()
    
    },
      function (xhr) { console.log((xhr.loaded / xhr.total * 100) + '% loaded'); },
      function (error) { alert("kahraman bulunamadı"); }
    )
   
  }

    oynat():void{
      alert("22222222222222222222222222222")
    this.clip = this.obj.animations[this.animnum]
    this.mixer = new THREE.AnimationMixer(this.model)
    this.action = this.mixer.clipAction(this.clip);
    this.action.play();
     
    this.clock = new THREE.Clock();
    alert("3333333333333333333333333")
    this.animate();
  }



  
  sel(val: string): void {
    this.animnum = Number(val)
    this.oynat()
   
  }

  

   

    animate(): void {
      
      requestAnimationFrame(this.animate.bind(this))
      var delta = this.clock.getDelta()
      this.mixer.update(delta);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
   

  }

  onWindowResize(){
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );

  }
}

