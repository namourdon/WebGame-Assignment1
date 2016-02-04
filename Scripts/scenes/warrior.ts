// Warrior SCENE
module scenes {
    export class WarriorScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _warriorImage: createjs.Bitmap;
        private _DoorWarriorButton: objects.Button;
        private _keyWarriorButton: objects.Button;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add warrior Image
            this._warriorImage = new createjs.Bitmap("");
            this.addChild(this._warriorImage);

            // add door warrior button
            this._DoorWarriorButton = new objects.Button(
                "DoorWarriorButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._DoorWarriorButton);
           
            // door warrior Button event listener
            this._DoorWarriorButton.on("click", this._DoorWarriorButtonClick, this);
            
            //add key warrior button
            this._keyWarriorButton= new objects.Button(
                "keyWarriorButton",
                config.Screen.CENTER_X+50,
                config.Screen.CENTER_Y+180
            );
            this.addChild(this._keyWarriorButton);
            //key warrior button event listener
            this._keyWarriorButton.on("click",this._keyWarriorButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _DoorWarriorButtonClick(event: createjs.MouseEvent) {
            // Switch to the mainscreen Scene
            scene = config.Scene.DOORW;
            changeScene();
        }
        private _keyWarriorButtonClick(event:createjs.MouseEvent){
            scene=config.Scene.KEYW;
            changeScene();
        }
    }
}