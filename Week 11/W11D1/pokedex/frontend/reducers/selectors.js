export const selectAllPokemon = (state) => { 
    const allPokemon = Object.values(state.entities.pokemon)
    return allPokemon
};