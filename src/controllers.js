
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addNewPokemon = async (req, res) => {
    const { name, types } = req.body;
    console.log(req.body);

    if (!req.file) {
        return res.status(400).json({ error: 'Sprite image is required' });
    }

    const spritePath = `/pokemons/${req.file.filename}`; // File path to store in the database

    try {
        // Create a new Pokémon in the database
        const newPokemon = await prisma.pokemon.create({
            data: {
                name,
                types: types ? types.split(',') : [], // Convert types string to array
                sprite: spritePath,
            },
        });
        res.status(201).json(newPokemon); // Return the created Pokémon as JSON
    } catch (error) {
        console.error('Error creating Pokémon:', error);
        res.status(500).json({ error: 'Unable to create Pokémon' });
    }
};

export const getPokemons = async (req, res) => {
    const pokemons = await prisma.pokemon.findMany();
    res.json(pokemons);
};
export const getPokemon = async (req, res) => {
    const { id } = req.params;
    const pokemon = await prisma.pokemon.findUnique({ where: { id } });
    res.json(pokemon);
};
export const deletePokemon = async (req, res) => {
    const { id } = req.params;
    const result = await prisma.pokemon.delete({ where: { id } });
    res.json(result);
};