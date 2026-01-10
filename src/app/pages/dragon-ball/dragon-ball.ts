
import { NgClass } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  templateUrl: '../dragon-ball/dragon-ball.html',
  imports: [NgClass],
  template: ``
})
export class DragonBall {

name: WritableSignal<string> = signal('');
  power: WritableSignal<number> = signal(0);

  characters: WritableSignal<Character[]> = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 }
  ]);

  powerClasses = computed(() => {
    return (power: number) => ({
      'text-danger': power > 9000,
      'text-info': power <= 9000
    })
  });

  changeName(value: string): void {
    this.name.set(value);
  }

  changePower(value: string) : void {
    this.power.set(Number(value));
  }

  addCharacter() : void {
    if(!this.name() || !this.power() || this.power() <= 0) return;
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters.update(chars => [...chars, newCharacter]);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
