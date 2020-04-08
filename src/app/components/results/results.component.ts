import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {

  heroes: any = [ ]


  constructor(  private activatedRoute: ActivatedRoute,  private heroesService: HeroesService ) {
   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.heroes = this.heroesService.buscarHeroes(params.nombre);
      console.log(params.nombre);
    }
    );
  }

}
