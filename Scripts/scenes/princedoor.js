var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Nashia Amourdon
//Date created:29/02/2016
//Last modified:05/02/2016
// Warrior door SCENE
var scenes;
(function (scenes) {
    var PrinceDoor = (function (_super) {
        __extends(PrinceDoor, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function PrinceDoor() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        PrinceDoor.prototype.start = function () {
            // add Prince door Image
            this._princeDoorImage = new createjs.Bitmap("../../Assets/images/mons.jpg");
            this.addChild(this._princeDoorImage);
            // add the Restart button to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 130);
            this.addChild(this._restartButton);
            // Restart Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        PrinceDoor.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Restart Button click event handler
        PrinceDoor.prototype._restartButtonClick = function (event) {
            // Switch to the Main screen Scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        };
        return PrinceDoor;
    })(objects.Scene);
    scenes.PrinceDoor = PrinceDoor;
})(scenes || (scenes = {}));
//# sourceMappingURL=princedoor.js.map