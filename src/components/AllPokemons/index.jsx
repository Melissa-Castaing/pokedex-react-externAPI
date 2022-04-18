import pokedata from '../../data/pokedex.json';
import Pokemon from '../Pokemon';
import './style.scss';

export default function AllPokemons() {
  return (
    <div className="pokemon">
      {
                pokedata.map((pkmn) => (
                  <Pokemon key={pkmn.id} />
                ))
            }
    </div>
  );
}
