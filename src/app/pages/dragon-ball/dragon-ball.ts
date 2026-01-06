
import { Component, signal, WritableSignal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: '../dragon-ball/dragon-ball.html'
})
export class DragonBall {
  characters: WritableSignal<Character[]> = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Piccolo', power: 7000 }
  ]);
}
