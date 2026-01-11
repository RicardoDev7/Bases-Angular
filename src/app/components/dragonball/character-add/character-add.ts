import { ChangeDetectionStrategy, Component, computed, input, InputSignal, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name: WritableSignal<string> = signal('');
  power: WritableSignal<number> = signal(0);

  newCharacter: OutputEmitterRef<Character> = output<Character>();

  characters: WritableSignal<Character[]> = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Piccolo', power: 7000 },
    { id: 4, name: 'Yancha', power: 500 }
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
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power()
    };
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
