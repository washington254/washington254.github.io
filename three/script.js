/// IMPORT
import * as THREE from 'three'
import { TWEEN } from './jsm/libs/tween.module.min.js'
import { OrbitControls } from './jsm/controls/OrbitControls.js'
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from './jsm/loaders/DRACOLoader.js'


// DRACO LOADER TO LOAD DRACO COMPRESSED MODELS FROM BLENDER
const dracoLoader = new DRACOLoader()
const loader = new GLTFLoader()
dracoLoader.setDecoderPath('./jsm/libs/draco/')
dracoLoader.setDecoderConfig({ type: 'js' })
loader.setDRACOLoader(dracoLoader)

//DIV CONTAINER CREATION TO HOLD THREEJS EXPERIENCE
const container = document.querySelector(".threejs-scene")
document.body.appendChild(container)

/// SCENE CREATION
const scene = new THREE.Scene()
scene.background = new THREE.Color('#b8baff')

/// RENDERER CONFIG
const renderer = new THREE.WebGLRenderer({ antialias: true}) // turn on antialias
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //set pixel ratio
renderer.setSize(window.innerWidth, window.innerHeight) // make it full screen
renderer.outputEncoding = THREE.sRGBEncoding // set color encoding
container.appendChild(renderer.domElement) // add the renderer to html div

/// CAMERAS CONFIG
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 100)
camera.position.set(34,16,-21)
scene.add(camera)

/// MAKE EXPERIENCE FULL SCREEN
window.addEventListener('resize', () => {
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
    renderer.setPixelRatio(2)
})

/// CREATE ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement)

/// SCENE LIGHTS
const ambient = new THREE.AmbientLight(0x8181df, 1.273)
scene.add(ambient)

const sunLight = new THREE.DirectionalLight(0xe8c37b, 1.96)
sunLight.position.set(-69,44,13)
scene.add(sunLight)

/// LOADING GLB/GLTF MODEL FROM BLENDER
loader.load('models/gltf/house.gltf', function (gltf) {

    scene.add(gltf.scene)
})

// INTRO CAMERA ANIMATION USING TWEEN
function introAnimation() {
    controls.enabled = false //disable orbit controls to animate the camera
    
    new TWEEN.Tween(camera.position.set(4,8,-6.5 )).to({ // from camera position
        x: 3.722, //desired x position to go
        y: 2.072, //desired y position to go
        z: 2.000 //desired z position to go
    }, 6500) // time take to animate
    .delay(1000).easing(TWEEN.Easing.Quartic.InOut).start() // define delay, easing
    .onComplete(function () { //on finish animation
        controls.enabled = true //enable orbit controls
        setOrbitControlsLimits() //enable controls limits
        TWEEN.remove(this) // remove the animation from memory
    })
}

introAnimation() // call intro animation on start

// DEFINE ORBIT CONTROLS LIMITS
function setOrbitControlsLimits(){
    controls.enableDamping = true
    controls.dampingFactor = 0.04
    controls.minDistance = 3
    controls.maxDistance = 12
    controls.autoRotate = true
    controls.enableRotate = true
    controls.enableZoom = true
    controls.maxPolarAngle = Math.PI /2.5
}

// RENDER LOOP FUNCTION
function rendeLoop() {

    TWEEN.update() // update animations

    controls.update() // update orbit controls

    renderer.render(scene, camera) // render the scene using the camera

    requestAnimationFrame(rendeLoop) //loop the render function
    
}

rendeLoop() //start rendering

