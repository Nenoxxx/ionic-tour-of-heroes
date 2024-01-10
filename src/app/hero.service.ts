import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HEROES} from "./mock-heroes";
import {Hero} from "./declarations";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number | undefined): Observable<Hero | undefined> {
    return of(HEROES.find(hero => hero.id === id));
  }
}
