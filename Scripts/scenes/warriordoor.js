var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Nashia Amourdon
//Date created:29/01/2016
//Last modified:05/02/2016
// Warrior door SCENE
var scenes;
(function (scenes) {
    var WarriorDoor = (function (_super) {
        __extends(WarriorDoor, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function WarriorDoor() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        WarriorDoor.prototype.start = function () {
            // add warrior door Image
            this._warriorDoorImage = new createjs.Bitmap("../../Assets/images/WarriorDoor.png");
            this.addChild(this._warriorDoorImage);
            // add the restart button
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 130);
            this.addChild(this._restartButton);
            // Restart Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        WarriorDoor.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Restart  Button click event handler
        WarriorDoor.prototype._restartButtonClick = function (event) {
            // Switch to the Main screen Scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        };
        return WarriorDoor;
    })(objects.Scene);
    scenes.WarriorDoor = WarriorDoor;
})(scenes || (scenes = {}));
//# sourceMappingURL=warriordoor.js.map