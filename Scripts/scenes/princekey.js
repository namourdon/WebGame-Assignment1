var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Prince key Scene
var scenes;
(function (scenes) {
    var PrinceKey = (function (_super) {
        __extends(PrinceKey, _super);
        //constructor
        function PrinceKey() {
            _super.call(this);
        }
        // start method
        PrinceKey.prototype.Start = function () {
            //add prince key image
            this._princeKeyImage = new createjs.Bitmap("../../Assets/images/Key.png");
            this.addChild(this._princeKeyImage);
            //add the restart button to the Game over scene 
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._restartButton);
            //Restart button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            //add this scene to global container
            stage.addChild(this);
        };
        //play scene update here
        PrinceKey.prototype.update = function () {
        };
        //restart button click event handler
        PrinceKey.prototype._restartButtonClick = function (event) {
            //switch to the mainscreen scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        };
        return PrinceKey;
    })(objects.Scene);
    scenes.PrinceKey = PrinceKey;
})(scenes || (scenes = {}));
//# sourceMappingURL=princekey.js.map