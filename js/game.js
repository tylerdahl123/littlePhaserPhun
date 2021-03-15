//create new scene
let gameScene = new Phaser.Scene('Game');

gameScene.preload = function(){
    //load background
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', "assets/dragon.png");
};

//called after preload
gameScene.create = function(){
    let background = this.add.sprite(0,0, 'background');//2 dimensional coordinate system...origin is in the top left corner of the game. 
    background.setOrigin(0,0);
    let player = this.add.sprite(70,180, 'player');
    player.depth = 1; 
    player.setScale(1);
    let enemy1 = this.add.sprite(250, 180, 'enemy');
    enemy1.setScale(0.5);

    let enemy2 = this.add.sprite(450, 180, 'enemy');
    enemy2.setScale(0.5);
    //depth allows things to be pulled up or down in the rendering order
    //to get sprite scale you have to look at the properties in the image through windows explorer
    // player.x = 10;
    // player.y = 
    //sprites are shown in the order they are listed
    //player is on top of the background
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