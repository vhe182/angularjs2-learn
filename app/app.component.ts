import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Pokemon</h2>
    <ul class="allpokemon">
      <li *ngFor="let pet of allpokemon"
        [class.selected]="pet === selectedPokemon"
        (click)="onSelect(pet)">
        <span class="badge">{{pet.id}}</span> {{pet.name}}
      </li>
    </ul>
    <my-pokemon-detail [pokemon]="selectedPokemon"></my-pokemon-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .allpokemon {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .allpokemon li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .allpokemon li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .allpokemon li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .allpokemon .text {
      position: relative;
      top: -3px;
    }
    .allpokemon .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [ PokemonService ]
})
export class AppComponent implements OnInit {
  title = 'Tour of Pokemon';
  allpokemon: Pokemon[];
  selectedPokemon: Pokemon;
  constructor(private pokemonService: PokemonService) { }

  getPokemon(): void {
    this.allpokemon = this.pokemonService.getPokemon();
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  onSelect(pokemon: Pokemon): void{
    this.selectedPokemon = pokemon;
  }
}
