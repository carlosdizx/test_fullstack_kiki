import CivilizedPokemon from "./CivilizedPokemon";

export interface CivilizedPokemonRepository{
    created(pokemon: CivilizedPokemon): Promise<CivilizedPokemon>;
    findAll(): Promise<CivilizedPokemon[]>;
}