let object = [];
let howManyold;



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
    


    bgColor: [255,89,88],
 

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
function mousePressed(){
    for (i = 0; i <  params.howMany; i++) {
       
        object.clicked();
        
}}

function draw() {
    
        background(255,115,0);
        fill('#d9c3f7');
        
    background(params.bgColor);
    
    if (howManyold != params.howMany) {
        object = [];
        populateArray();
    }
    
    object.forEach(object => {
        object.updateVals(params.HorzSpeed, params.VertSpeed)
        object.move();
        object.render();
    });

    howManyold = params.howMany
}
