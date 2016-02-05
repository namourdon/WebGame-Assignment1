var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Nashia Amourdon
//Date created:29/01/2016
//Last modified:05/02/2016
// Prince Key SCENE
var scenes;
(function (scenes) {
    var PrinceKey = (function (_super) {
        __extends(PrinceKey, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function PrinceKey() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        PrinceKey.prototype.start = function () {
            // add prince key Image
            this._princeKeyImage = new createjs.Bitmap("../../Assets/images/trapppedPrince.jpg");
            this.addChild(this._princeKeyImage);
            // add the Restart button to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 130);
            this.addChild(this._restartButton);
            // Restart Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        PrinceKey.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Restart Button click event handler
        PrinceKey.prototype._restartButtonClick = function (event) {
            // Switch to the Main screen Scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        };
        return PrinceKey;
    })(objects.Scene);
    scenes.PrinceKey = PrinceKey;
})(scenes || (scenes = {}));
//# sourceMappingURL=princekey.js.map