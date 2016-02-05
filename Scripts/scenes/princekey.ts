//Nashia Amourdon
//Date created:29/01/2016
//Last modified:05/02/2016
// Prince Key SCENE
module scenes {
    export class PrinceKey extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _princeKeyImage: createjs.Bitmap;
        private _restartButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add prince key Image
            this._princeKeyImage = new createjs.Bitmap("../../Assets/images/trapppedPrince.jpg");
            this.addChild(this._princeKeyImage);

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