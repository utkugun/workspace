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
  camera:THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   clock:THREE.Clock = new THREE.Clock();
  
  ngAfterViewInit(): void {
   
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rend.nativeElement.appendChild(this.renderer.domElement);
    this.basla
  }


    basla():void{
    
    this.scene.background = new THREE.Color(0xa0a0a0);
    this.scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);
    var model: any
    this.camera.position.set(-2, 2, 3);
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
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
      this.mixer.clipAction(obj.animations[0]).play();
      this.animate();

    })
  }


     animate():void {

      requestAnimationFrame(this.animate)

      var delta = this.clock.getDelta()
      this.mixer.update(delta);
      this.renderer.render(this.scene, this.camera);


    }
  

  

  sel(val: string): void {

  }

}
