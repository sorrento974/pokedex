import {useState} from "react";
import PokemonCard from "./components/PokemonCard"

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const before = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(Index => Index - 1);
    }
  };
  const next = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(Index => Index + 1);
    }
  };
  return (
    <>
      <PokemonCard
        pokemon={pokemonList[pokemonIndex]}
      />
       <button onClick={before} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button onClick={next} disabled={pokemonIndex === pokemonList.length - 1}>
        Suivant
      </button>
    </>
  );
}
    
  

export default App;
