import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.background = new THREE.Color(0x87CEEB); 

// Load textures
const loader = new THREE.TextureLoader();
const grass = loader.load('/textures/grass.jpg', function() {
    console.log("Texture loaded successfully");
}, undefined, function(err) {
    console.error("Error loading texture", err);
});

// Lighting
const light = new THREE.PointLight(0xffffff, 9999, 100);
light.position.set(0, 40, 0);
scene.add(light);

// Room Dimensions
const roomSize = 30;
const wallHeight = 5;

// Create a wall with a given color
function createWall(width, height, depth, x, y, z, color) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({ color: color, side: THREE.DoubleSide });
    const wall = new THREE.Mesh(geometry, material);
    wall.position.set(x, y, z);
    scene.add(wall);
}

// Function to create a wall with texture
function createTWall(width, height, depth, x, y, z, texture) {
    // Create geometry for the wall (PlaneGeometry)
    const geometry = new THREE.PlaneGeometry(width, height);

    // Create material with texture
    const material = new THREE.MeshStandardMaterial({ map: texture });

    // Create the wall mesh
    const wall = new THREE.Mesh(geometry, material);
    
    // Position the wall
    wall.position.set(x, y, z);
    
    // Rotate the wall if needed to face camera
    wall.rotation.x = -Math.PI / 2;  // Rotates 90 degrees to make it upright
    
    // Add to the scene
    scene.add(wall);
}

// Call the function with the texture
// createWall(roomSize, 0.1, roomSize, 0, -0.05, 0, texture);

// Creating the outside

//createTWall(roomSize, roomSize, roomSize, 0, -0.5, 0, grass); // Floor grass
createTWall(roomSize, roomSize, roomSize, 0, -0.5, 0, grass); 

for (let i=0;i<0;)


// Camera starting position
camera.position.set(0, 1.5, 4);

// Movement variables
let moveSpeed = 0.1;
let turnSpeed = 0.05;
let velocity = new THREE.Vector3();
let rotation = new THREE.Vector2();

// Key states
const keys = {};
window.addEventListener("keydown", (event) => keys[event.code] = true);
window.addEventListener("keyup", (event) => keys[event.code] = false);

function updateMovement() {
    let direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    direction.y = 0;
    direction.normalize();

    let right = new THREE.Vector3();
    right.crossVectors(camera.up, direction).normalize();

    if (keys["KeyW"]) camera.position.addScaledVector(direction, moveSpeed);
    if (keys["KeyS"]) camera.position.addScaledVector(direction, -moveSpeed);
    if (keys["KeyA"]) camera.position.addScaledVector(right, moveSpeed);
    if (keys["KeyD"]) camera.position.addScaledVector(right, -moveSpeed);

    if (keys["ArrowLeft"]) rotation.y += turnSpeed;
    if (keys["ArrowRight"]) rotation.y -= turnSpeed;

    camera.rotation.y = rotation.y;
    camera.rotation.x = rotation.x;
}

function animate() {
    requestAnimationFrame(animate);
    updateMovement();
    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});