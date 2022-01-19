export default class DragManager {
    constructor(scene, token) {
        this.dragToken = (scene, token) => {
            token.setInteractive();

            
            scene.input.setDraggable(token);

            scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
                console.log("Dragging!");
                gameObject.x = dragX;
                gameObject.y = dragY;
            });
        }
        
    }
}