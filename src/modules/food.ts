
//define the Food    class
class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }
    //get food position。ts syntax usage
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    //change food element postion randomly 0-390，every 10px move
    change() {
        let left = Math.round(Math.random() * 39) * 10 + 'px';
        let top = Math.round(Math.random() * 39) * 10 + 'px';
        this.element.style.left = left;
        this.element.style.top = top;
    }
}
export default Food;