﻿//Nashia Amourdon
//Date created:29/01/2016
//Last modified:04/02/2016
// mainscreen SCENE
module scenes {
    export class Mainscreen extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _mainImage: createjs.Bitmap;
        private _warriorButton: objects.Button;
        private _princeButton: objects.Button;
       // private _doorW: objects.Button;
        //private _doorP:objects.Button;
        //private _keyW: objects.Button;
        //private _keyP:objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._mainImage = new createjs.Bitmap("../../Assets/images/twoPrincess.png");
            this.addChild(this._mainImage);
            
            // add the warrior button to the MENU scene
            this._warriorButton = new objects.Button(
                "WarriorButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 130);
            this.addChild(this._warriorButton);
            
            // warrior Button event listener
            this._warriorButton.on("click", this._warriorButtonClick, this);
            
            // add the prince button to the MENU scene
            this._princeButton = new objects.Button(
                "prince",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 130);
            this.addChild(this._princeButton);
            
            // Prince Button event listener
            this._princeButton.on("click", this._princeButtonClick, this);
            /*
            //add the warrior door button to the Menu Scene
            this._doorW= new objects.Button(
                "DoorWarriorButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._doorW);
            
            // Prince Button event listener
            this._warriorButton.on("click", this._warriorButtonClick, this);
            */
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // Main screen Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // prince Button click event handler
        private _princeButtonClick(event: createjs.MouseEvent) {
            // Switch to the prince Scene
            scene = config.Scene.PRINCE;
            changeScene();
        }
        
        // warrior Button click event handler
        private _warriorButtonClick(event: createjs.MouseEvent) {
            // Switch to the warrior Scene
            scene = config.Scene.WARRIOR;
            changeScene();
        }
    }
}