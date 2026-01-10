import { Component, input, InputSignal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dragonball-character-list',
  imports: [NgClass],
  templateUrl: './character-list.html'
})
export class CharacterList {
  characters : InputSignal<Character[]> = input.required<Character[]>();
  powerClasses = input.required<(power: number) => {[key: string]: boolean}>();
  listName : InputSignal<string> = input.required<string>();
}
