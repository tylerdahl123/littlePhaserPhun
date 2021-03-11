//create new scene
let gameScene = new Phaser.Scene('Game');

// set the configuration of the gaem
let config = {
    type: Phaser.AUTO, //phaser will use WebGL or CANVAS
    width: 640, 
    height: 360,
    scene: gameScene
};


//create a new gane, pass the configuration

let game = new Phaser.Game(config);