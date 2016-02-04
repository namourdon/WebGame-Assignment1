var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Prince door Scene
var scenes;
(function (scenes) {
    var PrinceDoor = (function (_super) {
        __extends(PrinceDoor, _super);
        //constructor
        function PrinceDoor() {
            _super.call(this);
        }
        // start method
        PrinceDoor.prototype.Start = function () {
            //add prince door image
            this._princeDoorImage = new createjs.Bitmap("../../Assets/images/Trapped.png");
            this.addChild(this._princeDoorImage);
            //add the restart button to the Game over scene 
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._restartButton);
            //Restart button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            //add this scene to global container
            stage.addChild(this);
        };
        //restart button click event handler
        PrinceDoor.prototype._restartButtonClick = function (event) {
            //switch to the mainscreen scene
            scene = config.Scene.MAINSCREEN;
            changeScene();
        };
        return PrinceDoor;
    })(objects.Scene);
    scenes.PrinceDoor = PrinceDoor;
})(scenes || (scenes = {}));
//# sourceMappingURL=princedoor.js.map