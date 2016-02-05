var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Nashia Amourdon
//Date Created:29/01/2016
//last modified:05/02/2016
// Warrior key SCENE
var scenes;
(function (scenes) {
    var WarriorKey = (function (_super) {
        __extends(WarriorKey, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function WarriorKey() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        WarriorKey.prototype.start = function () {
            // add warrior key Image
            this._warriorKeyImage = new createjs.Bitmap("../../Assets/images/key.png");
            this.addChild(this._warriorKeyImage);
            // add the Restart button to start the game again
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 130);
            this.addChild(this._restartButton);
            // Restart Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        WarriorKey.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Restart Button click event handler
        WarriorKey.prototype._restartButtonClick = function (event) {
            // Switch to the Main screen Scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        };
        return WarriorKey;
    })(objects.Scene);
    scenes.WarriorKey = WarriorKey;
})(scenes || (scenes = {}));
//# sourceMappingURL=warriorkey.js.map