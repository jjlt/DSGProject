export default class TemplateScreen extends Phaser.Scene {
    constructor() {
        super({

            key: "TemplateScreen"
        })
    }


    preload() {

    }

    create() {

        this.returnToMenu = this.add.text(400, 500, ['Return to Start']).setInteractive();
        this.returnToMenu.on('pointerdown', () => {
            console.log('Returning to StartScreen');
            this.scene.start('StartScreen')
        })
    }

    update() {

    }
}