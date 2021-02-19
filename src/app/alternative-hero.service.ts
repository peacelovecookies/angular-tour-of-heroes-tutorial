import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NotifierService } from 'angular-notifier';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class AlternativeHeroService extends HeroService {
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.alert(newHero.name)),
      catchError(this.handleError<Hero>('addHero'))
      );
    }
    
  private alert(name: string) {
    this.alertService.notify('success', name);
  }
    
  constructor(
    protected http: HttpClient,
    protected messageSercive: MessageService,
    private alertService: NotifierService) {
      super(http, messageSercive);
  }
    
}