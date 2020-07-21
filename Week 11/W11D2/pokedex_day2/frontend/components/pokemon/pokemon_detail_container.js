import {connect} from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail'

const mapStateToProps = (state, ownProps) => {
    const singlePokemon = state.entities.pokemon[ownProps.match.params.pokemonId]
    // const items = state.entities.items[ownProps.match.params.pokemonId]
    pokemon: singlePokemon ;
    items: state.entities.items[singlePokemon.items.id]
}


const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: () => dispatch(requestSinglePokemon())
});