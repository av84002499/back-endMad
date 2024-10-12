import multer from "multer";
import { addNewPokemon, getPokemon, getPokemons, deletePokemon } from "./controllers.js";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/pokemons/'); // Set the destination folder
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use the original file name
    },
});

const upload = multer({ storage });

const routes = (app) => {
    app.route('/api/pokemons')
        .get(getPokemons) //GET Endpoint
        .post(upload.single('sprite'), addNewPokemon); //post endpoint

    app.route('/api/pokemons/:id')
        .get(getPokemon)  //Get specific Pokemon
        .delete(deletePokemon);   // delete specific Pokemon
}
export default routes;