
// Sélection du conteneur où afficher la scène
const container = document.getElementById("scene-container");

// Création de la scène
const scene = new THREE.Scene();

// Création de la caméra
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 3;

// Création du rendu WebGL
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(300, 300);
container.appendChild(renderer.domElement);

// Création du cube semi-transparent
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.3 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Création des arêtes du cube (en bleu)
const edgesGeometry = new THREE.EdgesGeometry(geometry);
const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
scene.add(edges);

// Animation du cube
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    edges.rotation.x = cube.rotation.x;
    edges.rotation.y = cube.rotation.y;
    renderer.render(scene, camera);
}

animate();
