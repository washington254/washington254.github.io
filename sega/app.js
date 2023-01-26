
var scene, sceneLight, portalLight, cam, renderer, clock ,portalParticles = [],smokeParticles = [] ;

        function initScene(){
            scene = new THREE.Scene();

            sceneLight = new THREE.DirectionalLight(0x4a4ada,0.8);
            sceneLight.position.set(0,0,5);
            scene.add(sceneLight);

            portalLight = new THREE.PointLight(0x062d89, 30, 600, 1.2);
            portalLight.position.set(0,0,250);
            scene.add(portalLight);

            cam = new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,1,10000);
            cam.position.z = 1300;
            scene.add(cam);
            
            console.log(cam);

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth , window.innerHeight);
            document.body.appendChild(renderer.domElement);

            particleSetup();
        }
        function particleSetup() {
            let loader = new THREE.TextureLoader();

            loader.load("smoke.png", function (texture){
                portalGeo = new THREE.PlaneBufferGeometry(350,350);
                portalMaterial = new THREE.MeshStandardMaterial({
                    map:texture,
                    transparent: true
                });
                smokeGeo = new THREE.PlaneBufferGeometry(1000,1000);
                smokeMaterial = new THREE.MeshStandardMaterial({
                    map:texture,
                    transparent: true
                });

                for(let p=880;p>250;p--) {
                    let particle = new THREE.Mesh(portalGeo,portalMaterial);
                    particle.position.set(
                        1.5 * p * Math.cos((5 * p * Math.PI) / 180),
                        0.7 * p * Math.sin((5 * p * Math.PI) / 180),
                        0.6 * p
                    );
                    particle.rotation.z = Math.random() *360;
                    portalParticles.push(particle);
                    scene.add(particle);
                }

                for(let p=0;p<40;p++) {
                    let particle = new THREE.Mesh(smokeGeo,smokeMaterial);
                    particle.position.set(
                        Math.random() * 1000-500,
                        Math.random() * 400-200,
                        25
                    );
                    particle.rotation.z = Math.random() *360;
                    particle.material.opacity = 0.8;
                    portalParticles.push(particle);
                    scene.add(particle);
                }
                clock = new THREE.Clock();
                animate();
                
            });
        }
        function animate() {
            let delta = clock.getDelta();
            portalParticles.forEach(p => {
                p.rotation.z -= delta *2.9;
            });
            smokeParticles.forEach(p => {
                p.rotation.z -= delta *2.2;
            });
            if(Math.random() > 0.9) {
                portalLight.power =850 + Math.random()*1500;
            }
            renderer.render(scene,cam);
            requestAnimationFrame(animate);
        }
        initScene();
