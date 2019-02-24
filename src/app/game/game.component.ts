import { Component, OnInit, Input } from '@angular/core';
import { NxNGame } from './game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() config: NxNGame;

  ngOnInit() {
    if (localStorage.getItem('highscore')) {
      this.config.highScore = parseInt(localStorage.getItem('highscore'), 10);
    }
  }

  gridClicked(isActive) {
    if (isActive) {
      this.config.initHighlightGrid();
      this.config.score++;
      if (this.config.score > this.config.highScore) {
        this.config.highScore = this.config.score;
        localStorage.setItem('highscore', this.config.highScore + '');
      }
    } else {
      this.config.score--;
    }
  }

  playNextLevel() {
    this.config.drawGrid(true);
  }
}
