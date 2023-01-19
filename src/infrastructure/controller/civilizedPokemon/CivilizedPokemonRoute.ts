import {Router} from "express";
import CivilizedPokemonAdapter from "../../data/civilizedPokemon/CivilizedPokemonAdapter";
import CivilizedPokemonData from "../../data/civilizedPokemon/CivilizedPokemonData";
import CivilizedPokemonUseCase from "../../../domain/usecase/civilizedPokemon/CivilizedPokemonUseCase";
import CivilizedPokemonController from "./CivilizedPokemonController";

const personRoute = Router();

const adapter = new CivilizedPokemonAdapter(CivilizedPokemonData);
const useCase = new CivilizedPokemonUseCase(adapter);
const cotroller = new CivilizedPokemonController(useCase);


personRoute.post("/", cotroller.registerPokemon);
personRoute.post("/all", cotroller.listPokemons);

export default personRoute;