// Sélection du conteneur où afficher la scène
const container = document.getElementById("scene-container");

// Création de la scène
const scene = new THREE.Scene();

// Création de la caméra
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 3;

// Création du rendu WebGL
const renderer = new THREE.WebGLRenderer();
renderer.setSize(300, 300);
container.appendChild(renderer.domElement);

// Création du cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation du cube
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
