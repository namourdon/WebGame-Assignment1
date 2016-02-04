/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var mainscreen: scenes.MainScreen;
var warrior: scenes.Warrior;
var prince: scenes.Prince;
var doorw:scenes.DoorW;
var doorp:scenes.DoorP;
var keyw:scenes.KeyW;
var keyp:scenes.KeyP;

function init(): void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.MAINSCREEN;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MAINSCREEN:
            // show the MENU scene
            stage.removeAllChildren();
            mainscreen = new scenes.();
            currentScene = mainscreen;
            console.log("Starting main Scene");
            break;
        case config.Scene.WARRIOR:
            // show the PLAY scene
            stage.removeAllChildren();
            warrior = new scenes.LeftCave();
            currentScene = warrior;
            console.log("Starting warrior Scene");
            break;
        case config.Scene.PRINCE:
            // show the prince scene
            stage.removeAllChildren();
            prince = new scenes.RightCave();
            currentScene = prince;
            console.log("Starting Prince Scene");
            break;
            
        case config.Scene.DOORW:
        //show the door scene
        stage.removeAllChildren();
        doorw= new scenes.
        
    }

    console.log(currentScene.numChildren);
}