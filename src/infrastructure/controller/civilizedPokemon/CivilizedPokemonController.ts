import CivilizedPokemonUseCase from "../../../domain/usecase/civilizedPokemon/CivilizedPokemonUseCase";
import { Request, Response } from "express";

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
}