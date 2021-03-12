//create new scene
let gameScene = new Phaser.Scene('Game');

gameScene.preload = function(){
    //load background
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
};

//called after preload
gameScene.create = function(){
    let background = this.add.sprite(0,0, 'background');//2 dimensional coordinate system...origin is in the top left corner of the game. 
    background.setOrigin(0,0);
    let player = this.add.sprite(70,180, 'player');
    // background.setPosition(640/2, 360/2);
}



// set the configuration of the gaem
let config = {
    type: Phaser.AUTO, //phaser will use WebGL or CANVAS
    width: 640, 
    height: 360,
    scene: gameScene
};


//create a new gane, pass the configuration

let game = new Phaser.Game(config);