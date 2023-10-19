import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import GUI from "lil-gui";

const $canvas = document.querySelector(".webgl");

/** ---Scene--- */
const scene = new THREE.Scene();

/** ---Camera--- */
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 3;

/** ---Renderer--- */
const renderer = new THREE.WebGLRenderer({ canvas: $canvas, antialias: false });
renderer.setSize(window.innerWidth, window.innerHeight);

/** ---Controls--- */
const controls = new OrbitControls(camera, $canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.07;

/** ---Loader--- */
let safeToRender = false;
const loadingManager = new THREE.LoadingManager();

const loader = new THREE.TextureLoader(loadingManager);
const usagi = loader.load("/usagi-final.jpg");

usagi.generateMipmaps = false;
usagi.minFilter = THREE.NearestFilter;
usagi.magFilter = THREE.NearestFilter;

usagi.repeat.setX(0.25);
usagi.wrapS = THREE.RepeatWrapping;

/** ---Objects--- */
const material = new THREE.MeshBasicMaterial({ map: usagi });
const box = new THREE.Mesh(new THREE.BoxGeometry(), material);
scene.add(box);

/** ---Gui--- */
const options = {
  duration: 0.2,
};
const gui = new GUI();
gui.addColor(material, "color");
gui.add(options, "duration", 0.05, 0.5, 0.001);

/** Animate */
const clock = new THREE.Clock();
let time = 0;

const offsets = [0, 0.25, 0.5, 0.75];
let offsetIdx = 0;

const animate = () => {
  const delta = clock.getDelta();
  time += delta;
  if (time > options.duration) {
    time = 0;
    offsetIdx < 4
      ? (usagi.offset.x = offsets[offsetIdx++])
      : offsets[(offsetIdx = 0)];
  }

  controls.update();

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
