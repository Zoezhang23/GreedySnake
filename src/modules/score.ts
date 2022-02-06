//class for score to calculate the score and level
class Score {
    score = 0;
    level = 1;
    maxLevel: number;
    maxScore: number;
    scoreSpan: HTMLElement;
    levelSpan: HTMLElement;

    constructor(maxLevel = 10, maxScore = 10) {
        this.scoreSpan = document.getElementById('score')!;
        this.levelSpan = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.maxScore = maxScore;
    }
    addScore() {
        this.scoreSpan.innerHTML = ++this.score + '';
        if (this.score % this.maxScore === 0) {
            this.addLevel();
        }
    }
    addLevel() {
        if (this.level < this.maxLevel) {
            this.levelSpan.innerHTML = ++this.level + '';
        }
    }
}
export default Score;