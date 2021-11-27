import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements AfterViewInit {
  @ViewChild('rend') rend: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var model:any
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight/2 );
   
       this.rend.nativeElement.appendChild(renderer.domElement);
   

    {
      const skyColor = 0xB1E1FF;  // light blue
      const groundColor = 0xB97A20;  // brownish orange
      const intensity = 1;
      const light = new THREE.HemisphereLight(skyColor, groundColor,1);
      scene.add(light);
    }
    {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(0, 10, 0);
      light.target.position.set(-5, 0, 0);
      scene.add(light);
      scene.add(light.target);
    }

    const loader = new OBJLoader();

    loader.load("https://raw.communitydragon.org/latest/game/assets/characters/aatrox/skins/base/aatrox/body.obj", (obj) => {
          
     obj.scale.set(0.05,0.05,0.05)
     obj.translateY(-0.5)     
     model=obj
     scene.add(model)
 
    })



    camera.position.z = 1;



    var animate = function () {

      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
     model.rotation.y += 0.005; 
    };



    animate();




  }

}
