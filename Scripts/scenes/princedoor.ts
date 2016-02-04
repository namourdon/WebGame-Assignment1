//Prince door Scene
module scenes{
    export class PrinceDoor extends objects.Scene{
        // Private instances variables
        private _princeDoorImage:createjs.Bitmap;
        private _restartButton:objects.Button;
        
        //constructor
        constructor(){
            super();
        }
        // start method
        public Start():void{
            //add prince door image
            this._princeDoorImage= new createjs.Bitmap("../../Assets/images/Trapped.png");
            this.addChild(this._princeDoorImage);
            
            //add the restart button to the Game over scene 
            this._restartButton= new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y+180
            );
            this.addChild(this._restartButton);
            
            //Restart button event listener
            this._restartButton.on("click",this._restartButtonClick, this);
            
            //add this scene to global container
            stage.addChild(this);
        }
        //restart button click event handler
        private _restartButtonClick(event:createjs.MouseEvent){
            //switch to the mainscreen scene
            scene= config.Scene.MAINSCREEN;
            changeScene();
        }
    }
}