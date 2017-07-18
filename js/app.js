var BjsApp = BjsApp || {}

BjsApp.init = function(){

    var canvas = document.getElementById('renderCanvas')

    var engine = new BABYLON.Engine(canvas, true)

    var scene = new BABYLON.Scene(engine)

    var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 2, -15), scene)

    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)

    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene)
    sphere.position.y = 1

    engine.runRenderLoop(function(){
        scene.render()
    })

}