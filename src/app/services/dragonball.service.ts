import { computed, effect, Injectable, signal, WritableSignal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

function loadFromLocalStorage(): Character[] {
  const data = localStorage.getItem('dragonball-characters');
  if(data){

  }
  return data ? JSON.parse(data) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  characters: WritableSignal<Character[]> = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('dragonball-characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) : void {
    this.characters.update(chars => [...chars, newCharacter]);
  }

  powerClasses = computed(() => {
    return (power: number) => ({
      'text-danger': power > 9000,
      'text-info': power <= 9000
    })
  });
}
