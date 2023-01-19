import express ,{Express} from "express";
import civilizedPokemonRoute from "./civilizedPokemon/CivilizedPokemonRoute";

export const initRoutes = (app: Express) => {
    app.use("/pokemon",civilizedPokemonRoute);
}