import CivilizedPokemon from "../../model/civilizedPokemon/CivilizedPokemon";
import {CivilizedPokemonRepository} from "../../model/civilizedPokemon/CivilizedPokemonRepository";

export default class CivilizedPokemonUseCase {
    constructor(private readonly repository: CivilizedPokemonRepository) {}

    public registerPokemon = async ({name,documentNumber, documentType,speciesPokemon,typePokemon}): Promise<CivilizedPokemon> => {
        const civilizedPokemon: CivilizedPokemon = new CivilizedPokemon(name,documentNumber,documentType,speciesPokemon,typePokemon);
        return await this.repository.created(civilizedPokemon);
    }

    public listPokemons = async ():Promise<CivilizedPokemon[]> => await this.repository.findAll();
}