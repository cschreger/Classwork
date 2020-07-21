export const selectAllPokemon = (state) => { 
    const allPokemon = Object.values(state.entities.pokemon)
    return allPokemon
};



// export const selectOnePokemon = (state) => {
//     const onePokemon = Object.values(state.entities
// }3