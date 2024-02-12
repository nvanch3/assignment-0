let GL, vao, program1, program2;
let currColor = [0, 0, 0, 0];
let currTriangles = 1;
let maxTriangles = 1;
let useJSON = false;

window.updateTriangles = function() {
	currTri = parseInt(document.querySelector("#triangles").value);
}

window.updateColor = function() {
	var r = parseInt(document.querySelector("#sliderR").value)/255.0;
	var g = parseInt(document.querySelector("#sliderG").value)/255.0;
	var b = parseInt(document.querySelector("#sliderB").value)/255.0;
	var a = parseInt(document.querySelector("#sliderA").value)/255.0;
	currColor = [r,g,b,a];
}

window.startAnimation = function() {
    animRunning = true;
}

window.stopAnimation = function() {
    animRunning = false;
}

window.checkBox = function() {
    
}

function uploadFile(event) {
    // load file and create buffers
}

async function createPrograms() { 
    // create vertex and fragment shaders, create programs
}

function createShader(source, type) {
    // create shader
	var shader = gl.createShader(type);
	gl.shaderSource(shader,source);
	gl.compileShader(shader);
        if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
        var info = gl.getShaderInfoLog(shader);
        console.log('Could not compile WebGL program:' + info);
        }
    
    return shader;
};

function createBuffer(vertices) {
    // create buffer
	var buffer= gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

	return buffer;
}

function createVAO(posAttribLoc, posBuffer, colAttribLoc, colBuffer) {
    // create vertex array
	var vao = gl.createVertexArray();
	
	gl.bindVertexArray(vao);
	gl.enableVertexAttribArray(posAttribLoc);
	var size = 3; // number of components per attribute
	var type = gl.FLOAT;
	gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
	gl.vertexAttribPointer(posAttribLoc, size, type, false, 0, 0);

	gl.enableVertexAttribArray(colorAttribLoc);
	size = 4;
	type = gl.FLOAT;
	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	gl.vertexAttribPointer(colorAttribLoc, size, type, false, 0, 0);

	return vao;
}

function draw() {

    // bind vao
    // use program
    // draw arrays
};

function createTriangles(nTriangles) {

    function rand() {
        return (2 * Math.random() - 1.0);
    }

    var positions = []
    var colors = []
    var poscolors = [];
    for(var i = 0; i < nTriangles; ++i) {
        var x = rand();
        var y = rand();
        var size = Math.random() * 0.25;
        //
        var pos = [
                 x, y+size, 0,
            x-size, y-size, 0,
            x+size, y-size, 0,
        ];
        var color = [
            1,0,0,0.5,
            0,1,0,1,
            0,0,1,1
        ];

        positions = positions.concat(pos);
        colors = colors.concat(color);

        //
        var poscolor = [
            x, y+size, 0, 1,0,0,0.5,
            x-size, y-size, 0, 1,0,0,1,
            x+size, y-size, 0, 1,0,0,1
        ];

        poscolors = poscolors.concat(poscolor);
    }

    return {'positions': positions, 'colors': colors, 'poscolors': poscolors};

}

async function initialize() {

    // initialive canvas
    // create programs
    // draw
};
 
window.onload = initialize;
