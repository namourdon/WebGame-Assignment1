var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Warrior key Scene
var scenes;
(function (scenes) {
    var WarriorKey = (function (_super) {
        __extends(WarriorKey, _super);
        //constructor
        function WarriorKey() {
            _super.call(this);
        }
        // start method
        WarriorKey.prototype.Start = function () {
            //add warrior key image
            this._warriorKeyImage = new createjs.Bitmap("");
            this.addChild(this._warriorKeyImage);
            //add the restart button to the Game over scene 
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._restartButton);
            //Restart button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            //add this scene to global container
            stage.addChild(this);
        };
        //restart button click event handler
        WarriorKey.prototype._restartButtonClick = function (event) {
            //switch to the mainscreen scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        };
        return WarriorKey;
    })(objects.Scene);
    scenes.WarriorKey = WarriorKey;
})(scenes || (scenes = {}));
//# sourceMappingURL=warriorkey.js.map