import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Hero} from '../hero-data'
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-hero-list-detail',
  templateUrl: './hero-list-detail.component.html',
  styleUrls: ['./hero-list-detail.component.css']
})
export class HeroListDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _heroService: HeroService) { }

  hero$: Observable<Hero>;

  ngOnInit() {
    console.log(this.selectedId)
    this.hero$ = this._heroService.getHero(this.selectedId);
  }

  @Input('id')
  public selectedId: number;

  @Output()
  change = new EventEmitter<number>();

  back(hero) {
    console.log("starting back to hero list")
    this.change.emit(hero.id);
  }

  save(hero){
    console.log("starting save hero")
    this.change.emit(hero.id);
  }

}
