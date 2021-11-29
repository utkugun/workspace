import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ElementRef, ViewChild } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements AfterViewInit {
 
  constructor() { }

  @ViewChild('rend') rend: ElementRef;
  
  ngAfterViewInit(): void {
    var clock = new THREE.Clock();
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var model: any
    var renderer = new THREE.WebGLRenderer()
    let mixer: THREE.AnimationMixer
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.rend.nativeElement.appendChild(renderer.domElement);



    var scene = new THREE.Scene();

    scene.background = new THREE.Color( 0xa0a0a0 );
    scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );


    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var model: any
 

    camera.position.set( -2, 2, 3 );

    const controls = new OrbitControls( camera, renderer.domElement );
			controls.target.set( 0, 0.5, 0 );
			controls.update();
			controls.enablePan = false;
			controls.enableDamping = true;

    const loader = new GLTFLoader().setPath("assets/ahri/skin2/");
    loader.load("skin2.gltf", (obj) => {

      model = obj.scene
   
      model.position.set( 0, 0, 0 );
      model.scale.set(0.01, 0.01, 0.01);
      scene.add(model)

      mixer = new THREE.AnimationMixer( model );
      mixer.clipAction(obj.animations[ 0 ] ).play();

    

      animate();

    },

      function (xhr) {

   
      
    },

      function (error) {
        alert(error);
      }


    )

    var animate = function () {

      requestAnimationFrame(animate)

      var delta = clock.getDelta()
      mixer.update(delta);
      renderer.render(scene, camera);


    }


  }

  sel(val: string): void {
     
  }

}
