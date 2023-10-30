import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>count: {{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {

  private initialValue = 10;
  public counter: number = this.initialValue;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  reset():void {
    this.counter = this.initialValue;
  }
}
