//Warrior door Scene
module scenes{
    export class WarriorDoor extends objects.Scene{
        // Private instances variables
        private _warriorDoorImage:createjs.Bitmap;
        private _restartButton:objects.Button;
        
        //constructor
        constructor(){
            super();
        }
        // start method
        public Start():void{
            //add warrior door image
            this._warriorDoorImage= new createjs.Bitmap("");
            this.addChild(this._warriorDoorImage);
            
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