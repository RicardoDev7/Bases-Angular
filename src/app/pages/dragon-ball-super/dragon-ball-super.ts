
import { NgClass } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: '../dragon-ball-super/dragon-ball-super.html',
  imports: [CharacterList, CharacterAdd],
  template: ``
})
export class DragonBallSuper {

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

  addCharacter(newCharacter: Character) : void {
    this.characters.update(chars => [...chars, newCharacter]);
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
