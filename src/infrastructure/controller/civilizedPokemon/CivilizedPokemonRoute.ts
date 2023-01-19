import {Router} from "express";
import CivilizedPokemonAdapter from "../../data/civilizedPokemon/CivilizedPokemonAdapter";
import CivilizedPokemonData from "../../data/civilizedPokemon/CivilizedPokemonData";
import CivilizedPokemonUseCase from "../../../domain/usecase/civilizedPokemon/CivilizedPokemonUseCase";
import CivilizedPokemonController from "./CivilizedPokemonController";

const civilizedPokemonRoute = Router();

const adapter = new CivilizedPokemonAdapter(CivilizedPokemonData);
const useCase = new CivilizedPokemonUseCase(adapter);
const cotroller = new CivilizedPokemonController(useCase);


civilizedPokemonRoute.post("/", cotroller.registerPokemon);
civilizedPokemonRoute.post("/all", cotroller.listPokemons);

export default civilizedPokemonRoute;