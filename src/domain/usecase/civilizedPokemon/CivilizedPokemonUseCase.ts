import CivilizedPokemon from "../../model/civilizedPokemon/CivilizedPokemon";
import {CivilizedPokemonRepository} from "../../model/civilizedPokemon/CivilizedPokemonRepository";

export default class CivilizedPokemonUseCase {
    constructor(private readonly repository: CivilizedPokemonRepository) {}

    public registerPokemon = async ({name,documentNumber,typeDocument,species,type}): Promise<CivilizedPokemon> => {
        const civilizedPokemon: CivilizedPokemon = new CivilizedPokemon(name,documentNumber,typeDocument,species,type);
        return await this.repository.created(civilizedPokemon);
    }

    public listPokemons = async ():Promise<CivilizedPokemon[]> => await this.repository.findAll();
}