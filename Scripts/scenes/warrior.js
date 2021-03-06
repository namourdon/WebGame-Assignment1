var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Nashia Amourdon
//Date created:29/01/2016
//Last modified:05/02/2016
// Warrior SCENE
var scenes;
(function (scenes) {
    var WarriorScene = (function (_super) {
        __extends(WarriorScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function WarriorScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        WarriorScene.prototype.start = function () {
            // add warrior Image
            this._warriorImage = new createjs.Bitmap("../../Assets/images/warrior.jpg");
            this.addChild(this._warriorImage);
            // add door warrior button
            this._DoorWarriorButton = new objects.Button("DoorButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 130);
            this.addChild(this._DoorWarriorButton);
            // door warrior Button event listener
            this._DoorWarriorButton.on("click", this._DoorWarriorButtonClick, this);
            //add key warrior button
            this._keyWarriorButton = new objects.Button("KeyButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 130);
            this.addChild(this._keyWarriorButton);
            //key warrior button event listener
            this._keyWarriorButton.on("click", this._keyWarriorButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        WarriorScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        WarriorScene.prototype._DoorWarriorButtonClick = function (event) {
            // Switch to the mainscreen Scene
            scene = config.Scene.DOORW;
            changeScene();
        };
        WarriorScene.prototype._keyWarriorButtonClick = function (event) {
            scene = config.Scene.KEYW;
            changeScene();
        };
        return WarriorScene;
    })(objects.Scene);
    scenes.WarriorScene = WarriorScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=warrior.js.map