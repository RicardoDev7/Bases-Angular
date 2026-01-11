
import { NgClass } from '@angular/common';
import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonBallService } from '../../services/dragonball.service';

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

  public dragonballService = inject(DragonBallService);
  public powerClasses = this.dragonballService.powerClasses;

}
