import { Component } from "@angular/core";

@Component({
  template: `
  <h1>Hello World</h1>
  <h2>Counter APP: {{ counter }}</h2>
  <button (click)="increaseByOne(1)">1</button>
  `
})
export class Counter {
  counter = 10;
  increaseByOne(value: number) : void {
    this.counter += value;
  }
}
