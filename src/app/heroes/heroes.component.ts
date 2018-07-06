import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero-data";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { Router } from "@angular/router";
import { query } from "@angular/core/src/render3/query";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  public selectedId: number;

  public isDisplayDetail: boolean = false;

  heroes$: Observable<Hero[]>;
  constructor(private _heroService: HeroService, private _router: Router) {}

  ngOnInit() {
    console.log(
      this._heroService.getHeroes().subscribe(item => {
        console.log(item);
      })
    );
    this.heroes$ = this._heroService.getHeroes();
  }

  gotoHeroDetail(hero) {
    console.log(hero);
    this.selectedId = hero.id;
    this.isDisplayDetail = true;
  }

  changeStatus(event){
    console.log(event);
  }



}
