// Warrior door SCENE
module scenes {
    export class WarriorDoor extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _warriorDoorImage: createjs.Bitmap;
        private _restartButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._warriorDoorImage = new createjs.Bitmap("../../Assets/images/WarriorDoor.png");
            this.addChild(this._warriorDoorImage);

            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 130);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        }
    }
}