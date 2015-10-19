var TObj = function (scene, camera) {
  this.scene = scene? scene : new THREE.scene()
  this.camera = camera? camera : new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

}
TObj.protype.addObj = function (name, obj) {
  this.objects[name] = obj
  this.scene.add(obj)
}
TObj.prototype.render = function () {
  console.log(this.render)
  requestAnimationFrame(this.render)
  this.renderer.render(this.scene, this.camera)
  this.animations = []

}
TObj.prototype.animate = function() {
    for(var i = 0; i<animations.length; i++) {
      //loop over [animations] and apply the update
    }

}
//add animation to object by name
TObj.prototype.addAnimation = function (name, prop, update) {
  anims = this.animations
  // objs = this.objects
  // objs[name][prop] += update

}
