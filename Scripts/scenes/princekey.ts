//Prince key Scene
module scenes{
    export class PrinceKey extends objects.Scene{
        // Private instances variables
        private _princeKeyImage:createjs.Bitmap;
        private _restartButton:objects.Button;
        
        //constructor
        constructor(){
            super();
        }
        // start method
        public Start():void{
            //add prince key image
            this._princeKeyImage= new createjs.Bitmap("../../Assets/images/Key.png");
            this.addChild(this._princeKeyImage);
            
            //add the restart button to the Game over scene 
            this._restartButton= new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X-100,
                config.Screen.CENTER_Y+180
            );
            this.addChild(this._restartButton);
            
            //Restart button event listener
            this._restartButton.on("click",this._restartButtonClick, this);
            
            //add this scene to global container
            stage.addChild(this);
        }
        
        //play scene update here
        public update():void{
            
        }
        //restart button click event handler
        private _restartButtonClick(event:createjs.MouseEvent){
            //switch to the mainscreen scene
            scene= config.Scene.MAINSCREEN;
            changeScene();
        }
    }
}