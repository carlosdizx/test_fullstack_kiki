import axios from "axios";

const pokeApi = axios.create({
  baseURL: process.env.HTTP_AXIOS_HOST_POKEAPI,
});

export default class PokeApi{
  getAllSpecies = async () => {
    const {data} = await pokeApi.get("pokemon?offset=0&limit=100");
    return data;
  }

  getAllTypes = async () => {
    const {data} = await pokeApi.get("type");
    return data;
  }
}