import { Component, signal, WritableSignal } from "@angular/core";

@Component({
  templateUrl: '../counter/counter.html',
  styleUrls: ['../counter/counter.css']
})
export class Counter {
  counter : number = 1;
  counterSignal: WritableSignal<number> = signal(1);
  increaseByOne() : void {
    this.counter += 1;
    this.counterSignal.update(current => current + 1);
  }
  decreaseByOne() : void {
    if(this.counter == 0) return;
    this.counter -= 1;
    this.counterSignal.update(current => current - 1);
  }
  resetCounter() : void {
    this.counter = 1;
    this.counterSignal.set(1);
  }
}
