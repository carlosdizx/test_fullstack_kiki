import database from "../../repository";
import {CivilizedPokemonRepository} from "../../../domain/model/civilizedPokemon/CivilizedPokemonRepository";
import CivilizedPokemon from "../../../domain/model/civilizedPokemon/CivilizedPokemon";

export default class CivilizedPokemonAdapter extends database implements CivilizedPokemonRepository {
    created(pokemon: CivilizedPokemon): Promise<CivilizedPokemon> {
        return super.save(pokemon);
    }

    findAll(): Promise<CivilizedPokemon[]> {
        return super.list();
    }
}