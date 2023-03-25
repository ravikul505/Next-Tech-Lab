import * as THREE from "three";
import Experience from "./Experience";
export default class camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.Sizes;
    this.scene = this.experience.Scene;
    this.canvas = this.experience.canvas;
    console.log(this.experience, this.scene, this.sizes, this.canvas);

    this.createPrespectiveCamera();
    this.createOrthographicCamera();
  }

  createPrespectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspect,
      0.1,
      100
    );
    this.scene.add(this.perspectiveCamera);
  }
  createOrthographicCamera() {
    this.frustrum = 5;
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.sizes.frustrum / 2,
      -this.sizes.frustrum / 2,
      -100,
      100
    );
    this.scene.add(this.orthographicCamera);
  }

  resize() {
    // updating presepective camera on resize
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    //update orthographic camera
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.top = this.sizes.frustrum / 2;
    this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
    this.orthographicCamera.updateProjectionMatrix();
  }
}
