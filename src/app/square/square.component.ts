import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [disabled]="disableBoard"> <h2> {{value}} </h2> </button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent{
  @Input() value: string | null = null;
  @Input() disableBoard: boolean = false;
}
