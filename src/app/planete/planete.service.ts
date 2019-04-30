import * as THREE from '/home/aurelien/node_modules/three/src/Three';
import { Injectable } from '@angular/core';
import { Scene, Material } from 'three';

@Injectable({
  providedIn: 'root'
})
export class PlaneteService {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;
  private otherlight: THREE.DirectionalLight;
  private cloud: THREE.Mesh;
  
   

  private cube: THREE.Mesh;

  createScene(elementId: string): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      40, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0xffffff );
    this.light.position.z = 10;
    this.scene.add(this.light);

    this.light = new THREE.DirectionalLight( 0xfdfcf0, 1 );
    this.light.position.set( 20, 10, 20 ).normalize();
    this.scene.add(this.otherlight);

    let geometry = new THREE.SphereGeometry(1, 50, 50);
    let material = new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load("./assets/earthmap1k.jpg")});
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add(this.cube);

    let cloudgeometry = new THREE.SphereGeometry(1.05, 50, 50);
    let cloudmaterial = new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load("./assets/clouds.png"), transparent: true, opacity: 0.8});
    this.cloud = new THREE.Mesh(cloudgeometry, cloudmaterial);
    this.scene.add(this.cloud);


  }
  createEarth(elementId:string, texture:string, title:string){
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      40, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0xffffff );
    this.light.position.z = 10;
    this.scene.add(this.light);

    this.light = new THREE.DirectionalLight( 0xfdfcf0, 1 );
    this.light.position.set( 20, 10, 20 ).normalize();
    this.scene.add(this.otherlight);

    let geometry = new THREE.SphereGeometry(1, 50, 50);
    let material = new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load(texture)});
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add(this.cube);



  }

  createMars(elementId:string){
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      40, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0xffffff );
    this.light.position.z = 10;
    this.scene.add(this.light);

    this.light = new THREE.DirectionalLight( 0xfdfcf0, 1 );
    this.light.position.set( 20, 10, 20 ).normalize();
    this.scene.add(this.otherlight);

    let geometry = new THREE.SphereGeometry(1, 50, 50);
    let material = new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load("./assets/mars_1k_color.jpg")});
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add(this.cube);



  }
  createSun(elementId:string){
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      40, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0xffffff );
    this.light.position.z = 10;
    this.scene.add(this.light);

    this.light = new THREE.DirectionalLight( 0xfdfcf0, 1 );
    this.light.position.set( 20, 10, 20 ).normalize();
    this.scene.add(this.otherlight);

    let geometry = new THREE.SphereGeometry(1, 50, 50);
    let material = new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load("./assets/sunmap.jpg")});
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add(this.cube);

  }
  
  
  

  animate(): void {
    window.addEventListener('DOMContentLoaded', () => {
      this.render();
    });

    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });

    
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }
}

