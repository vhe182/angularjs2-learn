import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Injectable()
export class PokemonService {
  getPokemon(): Pokemon[] {
    return POKEMONS;
  }
}
