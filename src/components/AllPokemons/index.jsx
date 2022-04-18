import pokedata from '../../data/pokedex.json';

export default function AllPokemons() {
  return (
    <div className="pokemon">
      {
                pokedata.map((pkmn) => (
                  <h1 key={pkmn.id}>
                    {pkmn.name.french}
                  </h1>
                ))
            }
    </div>
  );
}
