class Snake {
    element: HTMLElement;
    snakeHead: HTMLElement;
    snakeBody: HTMLCollection;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.snakeHead = document.querySelector('#snake > div') as HTMLElement;
        this.snakeBody = this.element.getElementsByTagName('div')!;
    }
    get X() {
        return this.snakeHead.offsetLeft;
    }
    get Y() {
        return this.snakeHead.offsetTop;
    }
    set X(value: number) {
        if (this.X === value) {
            return
        }
        if (value < 0 || value > 390) {
            throw new Error('Game over!');
        }
        //check if there are two body, if the second body positon equals the value.meaning reverse, this is not allowed.
        if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetLeft === value) {
            //contine moving left
            if (value > this.X) {
                value = this.X - 10;
            } else {
                //contine moving right
                value = this.X + 10;
            }
        }
        this.bodyMove();
        this.snakeHead.style.left = value + 'px';
        this.checkEatSelf();

    }
    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > 390) {
            throw new Error('Game over!');
        }
        //check if there are two body, if the second body positon equals the value.meaning reverse, this is not allowed.
        if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetTop === value) {
            //contine moving top
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                //contine moving bottom
                value = this.Y + 10;
            }
        }
        this.bodyMove();
        this.snakeHead.style.top = value + 'px';
        this.checkEatSelf();

    }
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }
    //later div location === the previous location
    bodyMove() {
        for (let i = this.snakeBody.length - 1; i > 0; i--) {
            let x = (this.snakeBody[i - 1] as HTMLElement).offsetLeft;
            let y = (this.snakeBody[i - 1] as HTMLElement).offsetTop;
            (this.snakeBody[i] as HTMLElement).style.left = x + 'px';
            (this.snakeBody[i] as HTMLElement).style.top = y + 'px';
        }
    }
    checkEatSelf() {
        for (let i = 1; i < this.snakeBody.length - 1; i++) {
            let ele = this.snakeBody[i] as HTMLElement;
            if (this.X === ele.offsetLeft && this.Y === ele.offsetTop) {
                console.log('x', this.X);
                console.log('body', ele.offsetLeft)
                throw new Error('Commit Suicide!');
            }
        }

    }

}
export default Snake;