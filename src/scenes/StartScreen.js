export default class StartScreen extends Phaser.Scene {
    constructor() {
        super({

            key: "StartScreen"
        })
    }

    preload() {

    }

    create() {
        this.printToConsole = this.add.text(400, 500, ['I do something to console']).setInteractive();
        this.printToConsole.on('pointerdown', () => {
            console.log('You pressed a button');
        })
        this.startGame = this.add.text(400, 600, ['Start the Game']).setInteractive();
        this.startGame.on('pointerdown', () => {
            console.log('Starting Game');
            this.scene.start('Game')
        })
    }

    update() {

    }
}