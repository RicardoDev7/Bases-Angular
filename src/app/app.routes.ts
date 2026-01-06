import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Hero } from './pages/hero/hero';
import { DragonBall } from './pages/dragon-ball/dragon-ball';

export const routes: Routes = [
  {
    path: '',
    component: Counter
  },
  {
    path: 'hero',
    component: Hero
  },
  {
    path: 'dragonball',
    component: DragonBall
  },
  {
    path: '**',
    redirectTo: ''
  }
];
