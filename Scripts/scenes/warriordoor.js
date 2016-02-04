var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Warrior door Scene
var scenes;
(function (scenes) {
    var WarriorDoor = (function (_super) {
        __extends(WarriorDoor, _super);
        //constructor
        function WarriorDoor() {
            _super.call(this);
        }
        // start method
        WarriorDoor.prototype.Start = function () {
            //add warrior door image
            this._warriorDoorImage = new createjs.Bitmap("");
            this.addChild(this._warriorDoorImage);
            //add the restart button to the Game over scene 
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._restartButton);
            //Restart button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            //add this scene to global container
            stage.addChild(this);
        };
        //restart button click event handler
        WarriorDoor.prototype._restartButtonClick = function (event) {
            //switch to the mainscreen scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        };
        return WarriorDoor;
    })(objects.Scene);
    scenes.WarriorDoor = WarriorDoor;
})(scenes || (scenes = {}));
//# sourceMappingURL=warriordoor.js.map