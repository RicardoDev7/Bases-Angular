import { Component } from "@angular/core";

@Component({
  templateUrl: '../counter/counter.html',
  styleUrls: ['../counter/counter.css']
})
export class Counter {
  counter = 1;
  increaseByOne() : void {
    this.counter += 1;
  }
  decreaseByOne() : void {
    if(this.counter == 0) return;
    this.counter -= 1;
  }
  resetCounter() : void {
    this.counter = 1;
  }
}
