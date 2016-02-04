module config {

    // Scene Constants
    export class Scene {
        public static MAINSCREEN: number = 0;
        public static WARRIOR: number = 1;
        public static PRINCE: number = 2;
        public static DOORW: number=3;
        public static DOORP: number=4;
        public static KEYW: number=5;
        public static KEYP: number=6;
        
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}