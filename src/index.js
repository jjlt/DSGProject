import Phaser from 'phaser';
import Game from './scenes/game.js';
import StartScreen from './scenes/StartScreen.js'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1000,
    height: 800,
    scene: [StartScreen, Game]
};

const menu = new Phaser.Game(config);
