let object = [];
let howManyold

let params = {
	howMany: 1,
	howManyMin: 1,
    howManyMax: 5,

	HorzSpeed: 1,
	HorzSpeedMin: -5,
    HorzSpeedMax: 5,
    HorzSpeedStep: 0.25,

    VertSpeed: 1,
	VertSpeedMin: -5,
    VertSpeedMax: 5,
    VertSpeedStep: 0.25,
    
    Thickness: 50,
	ThicknessMin: 10,
    ThicknessMax: 190,
    
    Length: 50,
	LengthMin: 10,
    LengthMax: 190,

    increaseRadius:0,
    increaseRadiusMin:0,
    increaseRadiusMax:30,

    bgColor: [0, 189, 189],
 

}

let visible = true;
var gui;

function populateArray() {
    for (i = 0; i <  params.howMany; i++) {
        object.push(new Bounce());
    }
    return console.log("working", object.length)
}

function setup() {
    populateArray();
    createCanvas(500, 500);
    background(params.bgColor);
    rectMode(CENTER)

    //GUI
	gui = createGui('Gui');
    gui.setPosition(508, 182);
	gui.addObject(params);

}

function draw() {

    background(params.bgColor);
    
    if (howManyold != params.howMany) {
        object = [];
        populateArray();
    }
    
    object.forEach(ball => {
        ball.updateVals(params.HorzSpeed, params.VertSpeed, params.Length, params.Thickness, params.increaseRadius)
        ball.move();
        ball.render();
    });

    howManyold = params.howMany
}
