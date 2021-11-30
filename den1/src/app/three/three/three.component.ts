import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ElementRef, ViewChild } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('rend') rend: ElementRef;
  renderer:THREE.WebGLRenderer=new THREE.WebGLRenderer()
  mixer:THREE.AnimationMixer 
  scene:THREE.Scene= new THREE.Scene();
  camera:THREE.PerspectiveCamera 
  clock:THREE.Clock = new THREE.Clock();
  controls:OrbitControls
  ngAfterViewInit(): void {
   
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rend.nativeElement.appendChild(this.renderer.domElement);
    this.basla()
  }


    basla():void{
   
      const clock=this.clock;
      const mixer=this.mixer
      const controls=new this.controls(this.camera, this.renderer.domElement)
      const camera=new this.camera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer=this.renderer
      const scene=this.scene


    this.scene.background = new THREE.Color(0xa0a0a0);
    this.scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);
    var model: any
    camera.position.set(-2, 2, 3);
   
    controls.target.set(0, 0.5, 0);
    controls.update();
   controls.enablePan = false;
    controls.enableDamping = true;

      const loader = new GLTFLoader().setPath("assets/ahri/skin2/");
      loader.load("skin2.gltf", (obj) => {

      model = obj.scene
      model.position.set(0, 0, 0);
      model.scale.set(0.01, 0.01, 0.01);
     
      this.scene.add(model)
      this.mixer=new THREE.AnimationMixer(model)
      this.mixer.clipAction(obj.animations[2]).play();
     
 
     
       
    },

    function ( xhr ) {alert( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},

    function ( error ) {alert( error );}
    )

     
     animate();
     function animate() {

      requestAnimationFrame(animate)

      var delta = clock.getDelta()
      mixer.update(delta);

      controls.update();
      renderer.render(scene, camera);


   }
   
    }
 


      

  sel(val: string): void {

  }

}
