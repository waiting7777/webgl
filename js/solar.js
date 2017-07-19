var BjsApp = BjsApp || {}

BjsApp.init = function(){

    var canvas = document.getElementById('renderCanvas')

    var engine = new BABYLON.Engine(canvas, true)

    var scene = new BABYLON.Scene(engine)

    var camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 15, BABYLON.Vector3.Zero(),scene)
    camera.attachControl(canvas)

    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)
    light.intensity = 0.5
    light.groundColor = new BABYLON.Color3(0, 0, 1)

    scene.clearColor = new BABYLON.Color3(0, 0, 0)

    var sun = BABYLON.Mesh.CreateSphere('sun', 16, 4, scene)

    var planetMaterial = new BABYLON.StandardMaterial('planetMat', scene)
    planetMaterial.diffuseTexture = new BABYLON.Texture('./assets/images/sand.jpg', scene)
    planetMaterial.specularColor = new BABYLON.Color3(0, 0, 0)

    var planet1 = BABYLON.Mesh.CreateSphere('planet1', 16, 1, scene)
    planet1.position.x = 4
    planet1.material = planetMaterial
    

    engine.runRenderLoop(function(){
        scene.render()
    })

    window.addEventListener('resize', function(){
        engine.resize()
    })

}