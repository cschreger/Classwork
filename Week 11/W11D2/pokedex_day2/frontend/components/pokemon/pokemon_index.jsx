import React from 'react'
import PokemonIndexItem from './pokemon_index_item'

class PokemonIndex extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        // const pokemonLi = this.props.pokemon.map((pokemon, i) => {
        //     return <li key={i}>
        //         {pokemon.name}
        //         <img src={pokemon.image_url}/>
        //     </li>
        // });

        const pokemonItems = this.props.pokemon.map(poke => (
            <PokemonIndexItem key={poke.id} pokemon={poke} />
        ));
        return (
            <section className="pokedex">
            <ul>{pokemonItems}</ul>
            {/* <ul>{pokemonLi}</ul> */}
            </section>
        );
    }

}

export default PokemonIndex;