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
civilizedPokemonRoute.get("/all", cotroller.listPokemons);
civilizedPokemonRoute.get("/all/species", cotroller.listSpecies);
civilizedPokemonRoute.get("/all/types", cotroller.listTypes);
civilizedPokemonRoute.get("/all/documentTypes", cotroller.listDocumentTypes);


export default civilizedPokemonRoute;