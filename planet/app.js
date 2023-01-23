import * as THREE from "./build/three.module.js";
import{ OrbitControls } from "./js/OrbitControls.js";
import{  FlakesTexture } from "./js/FlakesTexture.js";
import{ RGBELoader } from "./js/RGBELoader.js";
let scene,camera,renderer,controls,pointlight;

const sizes ={
    width: window.innerWidth,
    height: window.innerHeight
}

function init() {
scene = new THREE.Scene();

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    renderer.setSize(sizes.width, sizes.height);    
})



renderer = new THREE.WebGLRenderer({alpha:true,antialias:true})
renderer.setSize(sizes.width,sizes.height);
document.body.appendChild(renderer.domElement);

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

camera = new THREE.PerspectiveCamera(50,sizes.width/sizes.height,1,1000)
camera.position.set(0,0,500);
controls = new OrbitControls(camera,renderer.domElement); 

controls.autoRotate = true;
controls.autoRotateSpeed = 4;
controls.enableDamping = true;

pointlight = new THREE.PointLight(0x045d7a,1);
pointlight.position.set(200,200,200);
scene.add(pointlight);



let texture = new THREE.CanvasTexture(new FlakesTexture())
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.x = 10;
texture.repeat.y = 6;

const ballMaterial = {
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    metalness: 0.9,
    roughness: 0.5,
    color: 0x8418ca,
    normalMap: texture,
    normalScale : new THREE.Vector2( 0.15,0.15),

}

let ballGeo = new THREE.SphereGeometry(100,60,64);
let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
let ballMesh = new THREE.Mesh(ballGeo, ballMat);
scene.add(ballMesh);


animate();

}
function animate() {
    controls.update();
    renderer.render(scene,camera);
    requestAnimationFrame(animate);  
    
}
init()
