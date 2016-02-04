var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// mainscreen SCENE
var scenes;
(function (scenes) {
    var Mainscreen = (function (_super) {
        __extends(Mainscreen, _super);
        // private _doorW: objects.Button;
        //private _doorP:objects.Button;
        //private _keyW: objects.Button;
        //private _keyP:objects.Button;
        // CONSTRUCTOR ++++++++++++++++++++++
        function Mainscreen() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Mainscreen.prototype.start = function () {
            // add Intro Image
            this._mainImage = new createjs.Bitmap("../../Assets/images/Key.png");
            this.addChild(this._mainImage);
            // add the warrior button to the MENU scene
            this._warriorButton = new objects.Button("WarriorButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 130);
            this.addChild(this._warriorButton);
            // warrior Button event listener
            this._warriorButton.on("click", this._warriorButtonClick, this);
            // add the prince button to the MENU scene
            this._princeButton = new objects.Button("PrinceButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 130);
            this.addChild(this._princeButton);
            // Prince Button event listener
            this._princeButton.on("click", this._princeButtonClick, this);
            /*
            //add the warrior door button to the Menu Scene
            this._doorW= new objects.Button(
                "DoorWarriorButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._doorW);
            
            // Prince Button event listener
            this._warriorButton.on("click", this._warriorButtonClick, this);
            */
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Mainscreen.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // prince Button click event handler
        Mainscreen.prototype._princeButtonClick = function (event) {
            // Switch to the prince Scene
            scene = config.Scene.PRINCE;
            changeScene();
        };
        // warrior Button click event handler
        Mainscreen.prototype._warriorButtonClick = function (event) {
            // Switch to the warrior Scene
            scene = config.Scene.WARRIOR;
            changeScene();
        };
        return Mainscreen;
    })(objects.Scene);
    scenes.Mainscreen = Mainscreen;
})(scenes || (scenes = {}));
//# sourceMappingURL=mainscreen.js.map