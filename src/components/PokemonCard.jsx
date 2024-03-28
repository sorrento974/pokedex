import PropTypes from "prop-types";
function PokemonCard({ pokemon }) {

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

PokemonCard.propTypes ={
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
}


export default PokemonCard;