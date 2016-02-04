var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Mainscreen = (function (_super) {
        __extends(Mainscreen, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Mainscreen() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Mainscreen.prototype.start = function () {
            // add Intro Image
            this._mainImage = new createjs.Bitmap("../../Assets/images/IntroCave.png");
            this.addChild(this._mainImage);
            // add the warrior button to the MENU scene
            this._warriorBtn = new objects.Button("WarriorButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._warriorBtn);
            // warrior Button event listener
            this._warriorBtn.on("click", this._warriorButtonClick, this);
            // add the prince button to the MENU scene
            this._princeBtn = new objects.Button("PrinceButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._princeBtn);
            // Prince Button event listener
            this._princeBtn.on("click", this._princeButtonClick, this);
            //add the warrior door button to the Menu Scene
            this._doorW = new objects.Button("DoorWarriorButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._doorW);
            //Door Prince Button event listener
            this._doorP.on("click", this._doorPButtonClick, this);
            //add the Prince door button to the Menu Scene
            this._doorP = new objects.Button("DoorPrinceButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._doorP);
            //Door prince Button event listener
            this._doorP.on("click", this._doorPButtonClick, this);
            //add the warrior key button to the Menu Scene
            this._keyW = new objects.Button("keyWarriorButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._keyW);
            //key warrior Button event listener
            this._keyW.on("click", this._keyWButtonClick, this);
            //add the key Prince button to the Menu Scene
            this._keyP = new objects.Button("KeyPrinceButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._keyP);
            //key prince Button event listener
            this._keyP.on("click", this._keyWButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Mainscreen.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Mainscreen.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEFT_CAVE;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        Mainscreen.prototype._rightCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.RIGHT_CAVE;
            changeScene();
        };
        return Mainscreen;
    })(objects.Scene);
    scenes.Mainscreen = Mainscreen;
})(scenes || (scenes = {}));
//# sourceMappingURL=mainscreen.js.map