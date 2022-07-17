function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    // 摄像机视角，长宽比，近观测面，远观测面
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    /*渲染器*/
    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    /*设置场景颜色*/
    renderer.setClearColor(new THREE.Color(0x000000));
    /*渲染器的大小*/
    renderer.setSize(window.innerWidth, window.innerHeight);

    /*xyz轴线辅助线*/
    //确定xyz轴的方向，右手面向自己，大拇指方向x正，食指指向Y正，掌心为z正
    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    // create the ground plane
    //平面几何图形，长60宽20
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    //基础材质，颜色为白色
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xAAAAAA
    });
    //网格对象，可被添加到场景。网格对象，用来处理再场景中的位置
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    //Math。PI===180度。这里负向转动90度。
    // 初始化状态下，plane对象被放置在xy平面内，旋转后处于xz平面内
    //确定xyz轴的方向，右手面向自己，大拇指方向x正，食指指向Y正，掌心为z正
    plane.rotation.x = -0.5 * Math.PI;
    // 空间中的位置
    plane.position.set(15, 0, 0);

    // add the plane to the scene
    // plane对象被添加到场景中
    scene.add(plane);

    // create a cube
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xFF0000,
        // 默认显示为立方体。开启后，显示立方体线框
        wireframe: true
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // position the cube
    cube.position.set(-4, 3, 0);

    // add the cube to the scene
    scene.add(cube);

    // create a sphere
    //球体
    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x7777FF,
        wireframe: true
    });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // position the sphere
    sphere.position.set(20, 4, 2);

    // add the sphere to the scene
    scene.add(sphere);

    // position and point the camera to the center of the scene
    //摄像机在空间中的位置
    camera.position.set(-30, 40, 30);
    //摄像机查看scene的中心位置
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    //将render产生的dom，webgl-output节点添加dom
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    //渲染场景
    renderer.render(scene, camera);
}
