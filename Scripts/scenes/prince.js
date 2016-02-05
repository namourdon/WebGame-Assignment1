var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Prince SCENE
var scenes;
(function (scenes) {
    var PrinceScene = (function (_super) {
        __extends(PrinceScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function PrinceScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        PrinceScene.prototype.start = function () {
            // add prince Image
            this._princeImage = new createjs.Bitmap("../../Assets/images/prince.png");
            this.addChild(this._princeImage);
            // add door prince button
            this._DoorPrinceButton = new objects.Button("DoorButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 130);
            this.addChild(this._DoorPrinceButton);
            // door prince Button event listener
            this._DoorPrinceButton.on("click", this._DoorPrinceButtonClick, this);
            //add key prince button
            this._keyPrinceButton = new objects.Button("KeyButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 130);
            this.addChild(this._keyPrinceButton);
            //key prince button event listener
            this._keyPrinceButton.on("click", this._keyPrinceButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        PrinceScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        PrinceScene.prototype._DoorPrinceButtonClick = function (event) {
            // Switch to the mainscreen Scene
            scene = config.Scene.DOORP;
            changeScene();
        };
        PrinceScene.prototype._keyPrinceButtonClick = function (event) {
            scene = config.Scene.KEYP;
            changeScene();
        };
        return PrinceScene;
    })(objects.Scene);
    scenes.PrinceScene = PrinceScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=prince.js.map