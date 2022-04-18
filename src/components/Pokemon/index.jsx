import pokedata from '../../data/pokedex.json';
import image from '../../data/images/001.png';

import './style.scss';

export default function Pokemon() {
  return (
    <div className="card">
      <img className="card_img" src={image} alt={`Le pokémon ${pokedata.name}`} />
      <p>
        {pokedata.id}
        {pokedata.name}
      </p>
    </div>
  );
}
