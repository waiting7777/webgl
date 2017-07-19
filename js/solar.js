var BjsApp = BjsApp || {}

BjsApp.init = function(){

    var canvas = document.getElementById('renderCanvas')

    var engine = new BABYLON.Engine(canvas, true)

    var scene = new BABYLON.Scene(engine)

    var camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 15, BABYLON.Vector3.Zero(),scene)
    camera.attachControl(canvas)

    camera.upperRadiusLimit = 50

    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)
    light.intensity = 0.5
    light.groundColor = new BABYLON.Color3(0, 0, 1)

    scene.clearColor = new BABYLON.Color3(0, 0, 0)

    var sun = BABYLON.Mesh.CreateSphere('sun', 16, 4, scene)
    var sunMaterial = new BABYLON.StandardMaterial('sunMaterial', scene)
    sunMaterial.emissiveTexture = new BABYLON.Texture('assets/images/sun.jpg', scene)
    sunMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)
    sunMaterial.specularColor = new BABYLON.Color3(0, 0, 0)
    sun.material = sunMaterial

    var sunLight = new BABYLON.PointLight('sunLight', BABYLON.Vector3.Zero(), scene)
    sunLight.intensity = 2

    var planetMaterial = new BABYLON.StandardMaterial('planetMat', scene)
    planetMaterial.diffuseTexture = new BABYLON.Texture('./assets/images/sand.jpg', scene)
    planetMaterial.specularColor = new BABYLON.Color3(0, 0, 0)

    var planet1 = BABYLON.Mesh.CreateSphere('planet1', 16, 1, scene)
    planet1.position.x = 4
    planet1.material = planetMaterial
    
    var skybox = BABYLON.Mesh.CreateBox('skybox', 1000, scene)
    var skyboxMaterial = new BABYLON.StandardMaterial('skyboxMat', scene)

    skyboxMaterial.backFaceCulling = false
    
    skybox.infiniteDistance = true

    skybox.material = skyboxMaterial

    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0)

    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/images/skybox', scene)
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE

    engine.runRenderLoop(function(){
        scene.render()
    })

    window.addEventListener('resize', function(){
        engine.resize()
    })

}