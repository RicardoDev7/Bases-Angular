import { Component, signal, WritableSignal } from "@angular/core";

@Component({
  templateUrl: '../hero/hero.html'
})
export class Hero {
  name: WritableSignal<string> = signal('IronMan');
  age: WritableSignal<number> = signal(45);

  getHeroDescription() : string {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() : void {
    this.name.update(() => 'Spiderman');
    this.age.update(() => 22);
  }

  resetForm() : void {
    this.name.set('IronMan');
    this.age.set(45);
  }

  changeAge() : void {
    this.age.update(() => 60);
  }
}
