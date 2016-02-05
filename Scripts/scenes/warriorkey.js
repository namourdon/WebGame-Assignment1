var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Warrior door SCENE
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
            // add LeftCave Image
            this._warriorKeyImage = new createjs.Bitmap("../../Assets/images/key.png");
            this.addChild(this._warriorKeyImage);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 130);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        WarriorKey.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        WarriorKey.prototype._restartButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        };
        return WarriorKey;
    })(objects.Scene);
    scenes.WarriorKey = WarriorKey;
})(scenes || (scenes = {}));
//# sourceMappingURL=warriorkey.js.map