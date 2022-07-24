import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares!: string[];
  xIsNext!: boolean;
  winner!: string|null;
  turnCount: number = 1;
  winLocation!: number[]|null;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  getWinLocation(id:number): boolean{
    if(this.winLocation?.includes(id)){return true;}
    return false;
  }

  newGame(): void{
    console.log("Starting New Game")
    this.turnCount = 0;
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.winLocation = null;
    this.xIsNext = true;
  }

  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number){
    console.log(this.player + " Clicked at " + idx)
    if(!this.squares[idx]){
      this.turnCount++;
      this.squares.splice(idx,1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if(
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
        ) {
          this.winLocation = [a,b,c];
          return this.squares[a];
        }
    }
    return null;
  }

  isTie(turnCount:number): boolean{
    return !this.winner && turnCount >= 9;
  }

  showRetryButton() : boolean{
    return this.isTie(this.turnCount) || (this.winner !== null);
  }
}
