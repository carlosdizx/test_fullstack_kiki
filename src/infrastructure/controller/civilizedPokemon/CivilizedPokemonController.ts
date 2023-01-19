import CivilizedPokemonUseCase from "../../../domain/usecase/civilizedPokemon/CivilizedPokemonUseCase";
import { Request, Response } from "express";
import PokeApi from "../../http/axios/PokeApi";
const pokeapi = new PokeApi();



export default class CivilizedPokemonController {
    constructor(private readonly usecase: CivilizedPokemonUseCase) {}

    public registerPokemon = async ({query, body}:Request, res: Response) =>{
        const poke = await this.usecase.registerPokemon(body);
        res.send(poke);
    }

    public listPokemons = async (req: Request, res: Response) => {
        const list :any[] = await this.usecase.listPokemons();
        res.send(list);
    }

    public  listSpecies = async  (req: Request, res: Response)=> {
        const response = await pokeapi.getAllSpecies();
        res.send(response.results.map(r => r = r.name));
    }

    public  listTypes = async  (req: Request, res: Response)=> {
        const response = await pokeapi.getAllTypes();
        res.send(response.results.map(r => r = r.name));
    }
}