import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonBallService {
    characters: WritableSignal<Character[]> = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 }
  ]);

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
