// Prince SCENE
module scenes {
    export class PrinceScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _princeImage: createjs.Bitmap;
        private _DoorPrinceButton: objects.Button;
        private _keyPrinceButton: objects.Button;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add prince Image
            this._princeImage = new createjs.Bitmap("../../Assets/images/Prince.jpg");
            this.addChild(this._princeImage);

            // add door prince button
            this._DoorPrinceButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 130);
            this.addChild(this._DoorPrinceButton);
           
            // door prince Button event listener
            this._DoorPrinceButton.on("click", this._DoorPrinceButtonClick, this);
            
            //add key prince button
            this._keyPrinceButton= new objects.Button(
                "KeyButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 130
            );
            this.addChild(this._keyPrinceButton);
            //key prince button event listener
            this._keyPrinceButton.on("click",this._keyPrinceButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _DoorPrinceButtonClick(event: createjs.MouseEvent) {
            // Switch to the mainscreen Scene
            scene = config.Scene.DOORP;
            changeScene();
        }
        private _keyPrinceButtonClick(event:createjs.MouseEvent){
            scene=config.Scene.KEYP;
            changeScene();
        }
    }
}