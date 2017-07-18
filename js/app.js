var BjsApp = BjsApp || {}

BjsApp.init = function(){

    var canvas = document.getElementById('renderCanvas')

    var engine = new BABYLON.Engine(canvas, true)

    var scene = new BABYLON.Scene(engine)

    var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 2, -15), scene)

    camera.attachControl(canvas)

    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)

    var ground = BABYLON.Mesh.CreateGround('ground1', 20, 20, 2, scene)

    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene)
    sphere.position.y = 1

    var sphere2 = BABYLON.Mesh.CreateSphere('sphere2', 16, 4, scene)
    sphere2.position = new BABYLON.Vector3(3, 3, 3)

    var box = BABYLON.Mesh.CreateBox('box', 1, scene)
    box.position = new BABYLON.Vector3(7, 2, -5)

    var cyllinder = BABYLON.Mesh.CreateCylinder('cyl', 5, 1, 3, 16, scene)

    var lines = BABYLON.Mesh.CreateLines('lines', [
        new BABYLON.Vector3(0, 5, 0),
        new BABYLON.Vector3(1, 5, 0),
        new BABYLON.Vector3(0, 5, 1),
        new BABYLON.Vector3(2, 2, 0),
        new BABYLON.Vector3(1, 5, -5)
    ], scene)

    engine.runRenderLoop(function(){
        scene.render()
    })

}