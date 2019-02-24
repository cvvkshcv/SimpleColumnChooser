export class NxNGame {
    level: 'easy'|'medium'|'hard'| number;
    score: number = 0;
    highScore: number = 0;
    timer: number;
    timerBkp: number;
    changeTime: number = 1000;
    grids: number;
    totalGrid: Array<number>;
    highlightGridIndex: number;
    girdTimer: any;
    showMenu: boolean;

    constructor(level: 'easy'|'medium'|'hard'| number, timer: number) {
        this.level = level;
        this.timer = timer;
        this.timerBkp = timer;
        this.drawGrid();
        this.startTimer();
    }

    // Game timer
    public startTimer() {
        this.initHighlightGrid();
        const gameTimer = setInterval(() => {
            if (this.timer > 0) {
                this.timer--;
            } else {
                clearInterval(gameTimer);
                this.destroyHighlightGrid();
                this.showMenu = true;
                alert('Game over');
            }
        }, this.changeTime);
    }

    public initHighlightGrid() {
        this.destroyHighlightGrid();
        this.highlightGridIndex = Math.floor(Math.random() * this.totalGrid.length);
        this.girdTimer = setInterval(() => {
            this.highlightGridIndex = Math.floor(Math.random() * this.totalGrid.length);
        }, 1000);
    }
    public destroyHighlightGrid() {
        clearTimeout(this.girdTimer);
    }

    public drawGrid(levelUp?) {
        if (levelUp) {
            this.timer = this.timerBkp;
            this.grids++;
            this.startTimer();
            this.showMenu = false;
        } else {
            // initialize score,highscore and grid
            if (this.level === 'easy') {
            this.grids = 3;
            } else if (this.level === 'medium') {
                this.grids = 4;
            } else if (this.level === 'hard') {
                this.grids = 5;
            } else if (Number.isInteger(this.level)) {
                this.grids = this.level;
            }
        }
        // Create number of total grids for NxN
        this.totalGrid = Array(Math.pow(this.grids, 2)).map((x, i) => i);
    }
}
