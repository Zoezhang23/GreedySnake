import Snake from "./snake";
import Food from "./food";
import Score from "./score";

export default class Controller {
    snake: Snake;
    food: Food;
    score: Score;
    moveDirection = '';
    isEnd = false;
    constructor() {
        this.score = new Score();
        this.food = new Food();
        this.snake = new Snake();
        this.init();
    }
    //get user mouse event
    init() {
        document.addEventListener('keydown', this.keyHandler.bind(this));
        this.move();
    }
    keyHandler(event: KeyboardEvent) {
        this.moveDirection = event.key;
    }
    move() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.moveDirection) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        //check if eat the food
        if (this.checkFood(X, Y)) {
            //make new food
            this.food.change();
            //add another body
            this.snake.addBody();
            //change the score
            this.score.addScore();
        }
        // check if the snake hit the panle edge
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            alert(e.message);
            this.isEnd = true;
        }
        !this.isEnd && setTimeout(
            this.move.bind(this), (400 - 40 * (this.score.level - 1)))
    }
    checkFood(x: number, y: number) {
        return this.food.X === x && this.food.Y === y;
    }
}