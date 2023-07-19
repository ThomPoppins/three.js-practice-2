import * as THREE from "three";

// initialize the scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();

// set size of renderer
// the size is the same as the window width and height
renderer.setSize(window.innerWidth, window.innerHeight);

// add the renderer to the DOM
// this will add the canvas element to the DOM
// the canvas element is what we use to display the scene
document.body.appendChild(renderer.domElement);

// create a cube
// the cube is created with a geometry and a material
// the geometry is the shape of the cube
// the material is the color of the cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// the geometry and material are passed to a mesh
const cube = new THREE.Mesh(geometry, material);
// the mesh is added to the scene
scene.add(cube);

// set the camera position
// the camera is positioned at z = 5
// this means that the camera is 5 units away from the cube
// the camera is looking at the cube
camera.position.z = 5;

// create an animation loop
//  this will render the scene every time the screen is refreshed
//  this is done by calling requestAnimationFrame
//  this function takes a callback function as an argument
//  the callback function is called every time the screen is refreshed
const animate = function () {
  requestAnimationFrame(animate);

  // rotate the cube
  // this is done by changing the rotation of the cube
  // the rotation is changed by 0.01 radians every time the screen is refreshed
  // the rotation is changed both on the x and y axis
  // this means that the cube will rotate diagonally
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // render the scene
  // this is done by calling the render function on the renderer
  // the render function takes the scene and camera as arguments
  // this will render the scene from the perspective of the camera
  // the result is then displayed on the canvas element
  // the canvas element is what we added to the DOM earlier
  renderer.render(scene, camera);
};

// call the animate function
// this will start the animation loop
// the animation loop will continue until the page is closed
animate();
