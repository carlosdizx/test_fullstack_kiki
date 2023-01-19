import axios from "axios";

const pokeApi = axios.create({
  baseURL: process.env.HTTP_AXIOS_HOST_POKEAPI,
});

export default class PokeApi{
  getAllCategories = async () => {
    const {data} = await pokeApi.get("pokemon");
    return data;
  }
}