import { addNewPokemon, getPokemon, getPokemons } from "./controllers.js";

const routes = (app) => {
    app.route('/api/pokemons')
        .get(getPokemons) //GET Endpoint
        .post(addNewPokemon); //post endpoint

    app.route('/api/pokemons/:id')
        .get(getPokemon)  //Get specific Pokemon
        // .put(updatePokemon)   // Update specific Pokemon
        // .delete(deletePokemon);   // delete specific Pokemon
}
export default routes;