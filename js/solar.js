var BjsApp = BjsApp || {}

BjsApp.init = function(){

    var canvas = document.getElementById('renderCanvas')

    var engine = new BABYLON.Engine(canvas, true)

    var scene = new BABYLON.Scene(engine)

    var camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 15, BABYLON.Vector3.Zero(),scene)
    camera.attachControl(canvas)

    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)

    var sun = BABYLON.Mesh.CreateSphere('sun', 16, 4, scene)

    engine.runRenderLoop(function(){
        scene.render()
    })

    window.addEventListener('resize', function(){
        engine.resize()
    })

}