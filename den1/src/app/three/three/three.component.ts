import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ElementRef, ViewChild } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements AfterViewInit, OnInit {

  constructor(private data: DataService, private api: ApiService) { }
  subscription: Subscription
  @ViewChild('rend') rend: ElementRef;
  @ViewChild('audio') audio: ElementRef;

  renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()

  animnum: number = 0;
  animations: string[] = []
  model: any
  mixer: any
  clip: any
  clips: any
  action: any
  controls: any
  scene: any
  camera: any
  clock: any
  obj: any
  message: string
  key: string = ""
  geometry: any
  soundurl: string = "https://raw.communitydragon.org/11.23/plugins/rcp-be-lol-game-data/global/tr_tr/v1/champion-choose-vo/166.ogg"
 
  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe((message: string) => {
      this.message = message
      this.api.getir().subscribe((d: Record<any, any>) => {

        this.soundurl = "https://raw.communitydragon.org/11.23/plugins/rcp-be-lol-game-data/global/tr_tr/v1/champion-choose-vo/"
        this.key = d["data"][this.message]["key"]
        this.soundurl = this.soundurl + this.key + ".ogg"
        this.playsound()
        
      })

      const loader = new GLTFLoader().setPath("assets/" + this.message.toLowerCase() + "/skin2/");
      loader.load("skin2.gltf", (obj) => {
        this.obj = obj
        this.animations=[]
        obj.animations.forEach(an=>{

          this.animations.push(an.name)
        })

        this.model = this.obj.scene
        
        this.model.traverse((node: any) => {
          if (node.isMesh) { node.castShadow = true; }
        })
        this.model.position.set(0, -1, 0);
        this.model.scale.set(0.01, 0.01, 0.01);
        
              
        
        this.basla()
       
         },
     
      function (xhr) { console.log((xhr.loaded / xhr.total * 100) + '% loaded'); },
      function (error) { alert("kahraman bulunamadı "+error); 
    })

     
  })


   }

  ngAfterViewInit(): void {

    this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.rend.nativeElement.appendChild(this.renderer.domElement);
    
  
  }


  basla(): void {

    this.scene = new THREE.Scene();
    this.scene.clear();

    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    this.camera.position.set(-1, 0.8, 5);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minDistance = 1;
    this.controls.maxDistance = 10000;

    window.addEventListener('resize', this.onWindowResize, false);

    ////////////////////////////////////////////////////////////////
    let material = new THREE.MeshPhongMaterial({ color: 0x808080, dithering: true });
    let geometry = new THREE.PlaneGeometry(2000, 2000);
    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, - 1, 0);
    mesh.rotation.x = - Math.PI * 0.5;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    const ambient = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambient);
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(1, 2, 0);
    spotLight.angle = Math.PI / 4;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 512; // default
    spotLight.shadow.mapSize.height = 512; // default
    spotLight.shadow.camera.near = 0.5; // default
    spotLight.shadow.camera.far = 500; // default
    spotLight.shadow.focus = 1; // default
    this.scene.add(spotLight);
    ///////////////////////////////////////////////////
   
      this.scene.add(this.model)
      this.scene.background = new THREE.Color(0x808080);

      this.oynat()
 /////////////////////////////////////////////
  }
 
  oynat(): void {

    this.clip = this.obj.animations[this.animnum]
    this.mixer = new THREE.AnimationMixer(this.model)
    this.action = this.mixer.clipAction(this.clip);
    this.action.play();
    this.clock = new THREE.Clock();
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

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

  }

  playsound(): void {

    this.audio.nativeElement.load()





  }
}

