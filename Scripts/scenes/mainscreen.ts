// INTRO SCENE
module scenes {
    export class Mainscreen extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _mainImage: createjs.Bitmap;
        private _warriorBtn: objects.Button;
        private _princeBtn: objects.Button;
        private _doorW: objects.Button;
        private _doorP:objects.Button;
        private _keyW: objects.Button;
        private _keyP:objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._mainImage = new createjs.Bitmap("../../Assets/images/IntroCave.png");
            this.addChild(this._mainImage);
            
            // add the warrior button to the MENU scene
            this._warriorBtn = new objects.Button(
                "WarriorButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._warriorBtn);
            
            // warrior Button event listener
            this._warriorBtn.on("click", this._warriorButtonClick, this);
            
            // add the prince button to the MENU scene
            this._princeBtn = new objects.Button(
                "PrinceButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._princeBtn);
            
            // Prince Button event listener
            this._princeBtn.on("click", this._princeButtonClick, this);
            
            //add the warrior door button to the Menu Scene
            this._doorW= new objects.Button(
                "DoorWarriorButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._doorW);
            
            //Door Prince Button event listener
            this._doorP.on("click", this._doorPButtonClick, this);
            
             //add the Prince door button to the Menu Scene
            this._doorP= new objects.Button(
                "DoorPrinceButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._doorP);
            
            //Door prince Button event listener
            this._doorP.on("click", this._doorPButtonClick, this);
            
             //add the warrior key button to the Menu Scene
            this._keyW= new objects.Button(
                "keyWarriorButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._keyW);
            
            //key warrior Button event listener
            this._keyW.on("click", this._keyWButtonClick, this);
            
             //add the key Prince button to the Menu Scene
            this._keyP= new objects.Button(
                "KeyPrinceButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._keyP);
            
            //key prince Button event listener
            this._keyP.on("click", this._keyWButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _leftCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEFT_CAVE;
            changeScene();
        }
        
        // LEFT_CAVE Button click event handler
        private _rightCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.RIGHT_CAVE;
            changeScene();
        }
    }
}