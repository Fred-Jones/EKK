//instantiate
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
//constants
wi_Width = window.innerWidth
wi_Height = window.innerHeight
//size viewer and handle resize
renderer.setSize(wi_Width, wi_Height);
camera.position.z = 5;
window.addEventListener('resize', function () {
  console.log(this.innerWidth)
  renderer.setSize(this.innerWidth, this.innerHeight)
  camera.aspect = (this.innerWidth/this.innerHeight)
  camera.updateProjectionMatrix()
})
//append the WebGL viewer
document.getElementById('THREE').appendChild(renderer.domElement)
////
//icosahedron
var icogeometry = new THREE.IcosahedronGeometry(1);
var icomaterial = new THREE.MeshBasicMaterial({
    color: 0x3333ff,
    wireframe: true,
    wireframeLinewidth: 2
});
var ico = new THREE.Mesh(icogeometry, icomaterial)

//knot
var knotGeo = new THREE.TorusKnotGeometry(5, 1, 100, 16);
var knotMat = new THREE.MeshDepthMaterial({
    color: 0xfafff0,
    morphTargets: false,
    wireframe: true,
    wireframeLinewidth: 2
});
var knotMatB = new THREE.MeshPhongMaterial({
    color: 0xfaffff0,
    specular: 0x009900,
    shininess: 30,
    shading: THREE.FlatShading,
    wireframe: true

});
var knot = new THREE.Mesh(knotGeo, knotMat);
var knotB = new THREE.Mesh(knotGeo, knotMatB)
scene.add(ico);
scene.add(knot);
// scene.add(knotB)
// //set knotB perpendicular to knot
// knotB.rotation.x = 45

render();

//render scene
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    animate()
}
//animations
function animate() {
  ico.rotation.x += 0.005;
  ico.rotation.y += 0.005;
  knot.rotation.x += 0.005;
  knot.rotation.y += 0.005;
  // knotB.rotation.x += 0.005;
  // knotB.rotation.y += 0.005;
}
