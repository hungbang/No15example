import { Injectable } from '@angular/core';
import {Hero} from '../app/hero-data'
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const HEROES = [
  new Hero(11, "Mr. Nice"),
  new Hero(12, "Narco"),
  new Hero(13, "Bombasto"),
  new Hero(14, "Celeritas"),
  new Hero(15, "Magneta"),
  new Hero(16, "RubberMan")
];

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }


  public getHeroes() { return of(HEROES); }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map(heroes => heroes.find(hero => hero.id === +id))
    );
  }
}



