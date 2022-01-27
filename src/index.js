import Phaser from 'phaser';
import Game from './scenes/game.js';
import StartScreen from './scenes/start_screen.js';
import TemplateScreen from './scenes/template_screen.js'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1000,
    height: 800,
    scene: [StartScreen, Game, TemplateScreen]
};

const menu = new Phaser.Game(config);
