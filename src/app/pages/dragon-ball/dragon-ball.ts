
import { NgClass } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: '../dragon-ball/dragon-ball.html',
  imports: [NgClass]
})
export class DragonBall {
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
}
