//Nashia Amourdon
//Date Created:29/01/2016
//last modified:05/02/2016
// Warrior key SCENE
module scenes {
    export class WarriorKey extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _warriorKeyImage: createjs.Bitmap;
        private _restartButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add warrior key Image
            this._warriorKeyImage = new createjs.Bitmap("../../Assets/images/key.png");
            this.addChild(this._warriorKeyImage);

            // add the Restart button to start the game again
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 130);
            this.addChild(this._restartButton);
           
            // Restart Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // Restart Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the Main screen Scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        }
    }
}