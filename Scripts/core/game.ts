/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var mainscreen: scenes.Mainscreen;
var warrior: scenes.WarriorScene;
var prince: scenes.PrinceScene;
var doorw:scenes.WarriorDoor;
var doorp:scenes.PrinceDoor;
var keyw:scenes.WarriorKey;
var keyp:scenes.PrinceKey;

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
            mainscreen = new scenes.Mainscreen();
            currentScene = mainscreen;
            console.log("Starting main Scene");
            break;
        case config.Scene.WARRIOR:
            // show the warrior scene
            stage.removeAllChildren();
            warrior = new scenes.WarriorScene();
            currentScene = warrior;
            console.log("Starting warrior Scene");
            break;
        case config.Scene.PRINCE:
            // show the prince scene
            stage.removeAllChildren();
            prince = new scenes.PrinceScene();
            currentScene = prince;
            console.log("Starting Prince Scene");
            break;
            
         case config.Scene.DOORW:
         //show the warrior door scene
         stage.removeAllChildren();
         doorw= new scenes.WarriorDoor();
         currentScene=doorw;
         console.log("Starting door warrior scene");
         break;
            
        case config.Scene.DOORP:
        //show the prince door scene
        stage.removeAllChildren();
        doorp= new scenes.PrinceDoor();
        currentScene= doorp;
        console.log("Starting door prince scene");
        break;
        
        case config.Scene.KEYW:
        //show the warrior key scene
        stage.removeAllChildren();
        keyw=new scenes.WarriorKey();
        currentScene= keyw;
        console.log("Starting key warrior scene");
        break;
        
        case config.Scene.KEYP:
        //show the prince key scene
        stage.removeAllChildren();
        keyp= new scenes.PrinceKey();
        currentScene= keyp;
        console.log("Starting key prince scene");
        break;
        
    }
    

    console.log(currentScene.numChildren);
}