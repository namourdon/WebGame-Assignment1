//Nashia Amourdon
//Date created:29/02/2016
//Last modified:05/02/2016
// Warrior door SCENE
module scenes {
    export class PrinceDoor extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _princeDoorImage: createjs.Bitmap;
        private _restartButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Prince door Image
            this._princeDoorImage = new createjs.Bitmap("../../Assets/images/mons.jpg");
            this.addChild(this._princeDoorImage);

            // add the Restart button to the OVER scene
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