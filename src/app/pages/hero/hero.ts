import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal, WritableSignal } from "@angular/core";

@Component({
  templateUrl: '../hero/hero.html',
  imports: [UpperCasePipe]
})
export class Hero {
  name: WritableSignal<string> = signal('IronMan');
  age: WritableSignal<number> = signal(45);
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });
  capitalizedName = computed(() => this.name().toUpperCase());

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
