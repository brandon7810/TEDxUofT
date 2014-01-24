var container;
var camera,scene,renderer;

var checker = 1;

var counter = 0;
var formation = ["mix","line","circle","cube","spiral"]



init();
animate();
window.setInterval(function(){
  chaos(750,formation[counter]);
  if (counter<4) {
  	counter++;
  } else {
  	counter = 0;
	}
}, 10000);

function init(){
	container = document.createElement("div");
	document.getElementById("main-page").appendChild(container);

	Perspective_Camera();

	scene = new THREE.Scene();

	var geometry = new THREE.CubeGeometry(10,10,10);
	
	var window_width = $(window).width();	
	var num_cubes = Math.floor(window_width/1600*110);
	
	for(var i = 0;i < num_cubes;i++){

		var material = new THREE.MeshBasicMaterial({
			color : 0xFF2B06,
		    opacity : 0.5
		    , wireframe : true
		});
		var object = new THREE.Mesh(geometry,material);
		
		object.position.x = Math.random() * 800 - 400;
		object.position.y = Math.random() * 800 - 400;
		object.position.z = Math.random() * 800 - 400;

		object.scale.x = Math.random() * 2 + 1;
		object.scale.y = Math.random() * 2 + 1;
		object.scale.z = Math.random() * 2 + 1;

		object.rotation.x = Math.random() * 2 * Math.PI;
		object.rotation.y = Math.random() * 2 * Math.PI;
		object.rotation.z = Math.random() * 2 * Math.PI;

		scene.add(object);

	}

	renderer = new THREE.CanvasRenderer();
	renderer.setSize(window.innerWidth,window.innerHeight);

	container.appendChild(renderer.domElement);
	window.addEventListener("resize",onWindowResize,false);
}

function onWindowResize(){
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth,window.innerHeight);
}

/*-----------------------------------
  	SHUFFLE CUBES
-----------------------------------*/
function chaos(animationTime,animationName){
	var delayTime = animationTime / 4;	
	var waitTime = animationTime * 3 + delayTime;
	if(checker == 1 && animationName != "mix"){
		waitTime = 0;
		checker = 0;
	}

	switch(animationName){
		case "line":
			setTimeout(playLine,waitTime);
		break;
		case "circle":
			setTimeout(playCircle,waitTime);
		break;
		case "cube":
			setTimeout(playCube,waitTime);
		break;
		case "spiral":
			setTimeout(playSpiral,waitTime);
		break;
		case "mix":
			checker = 1;
		break;
		default:
			break;
	}

	if(waitTime != 0){
		for(var i = 0;i < scene.children.length;i++){
			new TWEEN.Tween(scene.children[i].position).to({
				x : Math.random() * 800 - 400,
				y : Math.random() * 800 - 400,
				z : Math.random() * 800 - 400},animationTime )
				.easing( TWEEN.Easing.Elastic.Out).start();

			new TWEEN.Tween(scene.children[i].rotation).to({
				x : Math.random() * 2 * Math.PI,
			    y : Math.random() * 2 * Math.PI,
			    z : Math.random() * 2 * Math.PI},animationTime)
				.delay(animationTime)
				.easing( TWEEN.Easing.Elastic.Out).start();

			new TWEEN.Tween(scene.children[i].scale).to({
				x : Math.random() * 5 + 1, 
			    y : Math.random() * 5 + 1,
			    z : Math.random() * 5 + 1,},animationTime)
				.delay(animationTime * 2 + delayTime)
				.easing( TWEEN.Easing.Elastic.Out).start();

		}
	}
}

/*-----------------------------------
  	SET COLORFUL
-----------------------------------*/
function changeManyColors(){

	var len = scene.children.length;
	for(var i = 0;i < len;i++){

		new TWEEN.Tween(scene.children[i].material.color).to({
			b: Math.random(), 
			g : Math.random(),
			r : Math.random()},1000)
			.easing( TWEEN.Easing.Elastic.Out).start();
	}
}

/*-----------------------------------
  	SET GREEN,YELLOW,BULE and RED	
-----------------------------------*/
function changeFourColors(){

	var len = scene.children.length;
	for(var i = 0;i < len;i++){
			
	        switch(i%4){
			case 0://green
				new TWEEN.Tween(scene.children[i].material.color).to({
				b: 0, 
				g : 0.84,
				r : 0.18},1000)
				.easing( TWEEN.Easing.Elastic.Out).start();
				break;
			case 1://yellow
				new TWEEN.Tween(scene.children[i].material.color).to({
				b: 0, 
				g : 1.0, 
				r : 1.0},1000)
				.easing( TWEEN.Easing.Elastic.Out).start();
				break;

			case 2://blue
				new TWEEN.Tween(scene.children[i].material.color).to({
				b: 1.0, 
				g : 0, 
				r : 0},1000)
				.easing( TWEEN.Easing.Elastic.Out).start();
				break;
			case 3://red
				new TWEEN.Tween(scene.children[i].material.color).to({
				b: 0, 
				g : 0,
				r : 1.0},1000)
				.easing( TWEEN.Easing.Elastic.Out).start();
				break;
			default:
				break;
		}
	}
}

/*-----------------------------------
  	CREATE LINE 
-----------------------------------*/
function playLine(){
	for(var i = 0;i < scene.children.length;i++){
		new TWEEN.Tween(scene.children[i].position).to({
			x : -500 + i * 30,
			y : 0,
			z : 0},1000)
			.easing( TWEEN.Easing.Elastic.Out).start();

		new TWEEN.Tween(scene.children[i].rotation).to({
			x : 0,
		    y : 0,
		    z : 0},1000)
			.delay(1000)
			.easing( TWEEN.Easing.Elastic.Out).start();

		new TWEEN.Tween(scene.children[i].scale).to({
			x : 1, 
		    y : 1,
		    z : 1},1000)
			.delay(2250)
			.easing( TWEEN.Easing.Elastic.Out).start();
	}

}

/*-----------------------------------
  	CREATE CIRCLE 
-----------------------------------*/
function playCircle(){
	
	var r = 300;
	var len = scene.children.length;
	var theta = 2 * Math.PI / len;
	for(var i = 0;i < len;i++){
		new TWEEN.Tween(scene.children[i].position).to({
			x : r * Math.cos(theta * i),
			y : r * Math.sin(theta * i),
			z : 0},1000)
			.easing( TWEEN.Easing.Elastic.Out).start();

		new TWEEN.Tween(scene.children[i].rotation).to({
			x : 0,
			y : 0,
			z : 0},1000)
			.delay(1000)
			.easing( TWEEN.Easing.Elastic.Out).start();

		new TWEEN.Tween(scene.children[i].scale).to({
			x : 0.8, 
			y : 0.8, 
			z : 0.8},1000)
			.delay(2250)
			.easing( TWEEN.Easing.Elastic.Out).start();

	}
}

/*-----------------------------------
  	CREATE CUBE
-----------------------------------*/
function playCube(){
	//var len = Math.pow(scene.children.length,1.0/3.0);	
	var len = 5;
	console.log(len);
	for(var i = 0;i < len;i++){
		for(var j = 0;j < len;j++){
			for(var k = 0;k < len;k++){
				new TWEEN.Tween(scene.children[i * len * len + j * len + k].position).to({
					x : -100 + i * 60,
					y : -100 + j * 60,
					z : -100 + k * 60},1000)
					.easing( TWEEN.Easing.Elastic.Out).start();

				new TWEEN.Tween(scene.children[i * len * len + j * len + k].rotation).to({
					x : 0,
					y : 0,
					z : 0},1000)
					.delay(1000)
					.easing( TWEEN.Easing.Elastic.Out).start();

				new TWEEN.Tween(scene.children[i * len * len + j * len + k].scale).to({
					x : 1, 
					y : 1,
					z : 1},1000)
					.delay(2250)
					.easing( TWEEN.Easing.Elastic.Out).start();
			}
		}
	}
}


/*-----------------------------------
  	CREATE SPIRAL
-----------------------------------*/
function playSpiral(){
	
	var r = 30;
	var len = scene.children.length;
	var theta = 2 * Math.PI / len;
	theta *= 30;
	for(var i = 0;i < len;i++){
		new TWEEN.Tween(scene.children[i].position).to({
			x : r * Math.cos(theta * i),
			y : r * Math.sin(theta * i),
			z : 10 * i},1000)
			.easing( TWEEN.Easing.Elastic.Out).start();

		new TWEEN.Tween(scene.children[i].rotation).to({
			x : 0,
			y : 0,
			z : 0},1000)
			.delay(1000)
			.easing( TWEEN.Easing.Elastic.Out).start();

		new TWEEN.Tween(scene.children[i].scale).to({
			x : 0.8, 
			y : 0.8, 
			z : 0.8},1000)
			.delay(2250)
			.easing( TWEEN.Easing.Elastic.Out).start();
			
	}
}
/*-----------------------------------
  	CAMERA 
-----------------------------------*/
function Perspective_Camera(){
    var fov = 40;
    var aspect = window.innerWidth / window.innerHeight;
    var near = 1;
    var far = 10000;

    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);

    camera.position.set(0,300,500);
}

function animate(){
	requestAnimationFrame(animate);

	render();
}

var radius = 600;
var theta = 0;

function render(){
	TWEEN.update();

	theta += 0.1;

	camera.position.x = radius * Math.sin(THREE.Math.degToRad(theta));
	camera.position.y = radius * Math.sin(THREE.Math.degToRad(theta));
	camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta));

	camera.lookAt(scene.position);

	renderer.render(scene,camera);

}


