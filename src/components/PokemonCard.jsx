function PokemonCard({pokemon}) {
  
    return (
      <figure>
        {pokemon.image ? (
          <img src={pokemon.image} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  }
  
  
  
  export default PokemonCard;