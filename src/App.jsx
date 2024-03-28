import PokemonCard from "./components/PokemonCard"


function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <>
      <PokemonCard
        pokemon={pokemonList[0]}
      />
    </>
  );
}

export default App;
