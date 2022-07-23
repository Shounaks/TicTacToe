import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [ngClass]="{'font-extrabold text-7xl border-2': true,'bg-primary':isWinLocation}" [disabled]="disableBoard"> <h2> {{value}} </h2> </button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent{
  @Input() value: string | null = null;
  @Input() disableBoard: boolean = false;
  @Input() isWinLocation: boolean|undefined = false;  
}
