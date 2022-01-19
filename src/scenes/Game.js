import DragManager from '../helpers/DragManager.js'

export default class Game extends Phaser.Scene {
    constructor() {
        super({

            key: "Game"
        })
    }

    preload() {

    }

    create() {
        this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setInteractive();
        this.dealText.on('pointerdown', () => {
            this.dealTokens();
        })

        this.dealTokens = () => {
            console.log("Pointer is down");
            for (let i = 0; i < 5; i++) {
                this.token = this.add.rectangle(200 + (i * 150), 600, 100, 100, 0x00ffff);
                
            }
        }

    }

    update() {

    }
}