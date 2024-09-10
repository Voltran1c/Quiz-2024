import { useState, useEffect } from "react";

const PokemonDex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonList = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
        );
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonList();
  }, []);

  const fetchPokemonDetails = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-[#8ac55f] pb-10">
      <h1 className="text-4xl font-bold mb-4 text-white">API Pokemon</h1>
      {loading ? (
        <p className="text-lg font-semibold text-blue-500">Loading...</p>
      ) : (
        <>
          <button
            onClick={() =>
              fetchPokemonDetails("https://pokeapi.co/api/v2/pokemon/1/")
            }
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
          >
            Get Pokemon Dex
          </button>
          {selectedPokemon && (
            <div className="p-4 rounded-md w-72 text-left border-2 border-white bg-[#8ac55f]">
              <div className="flex space-x-2">
                <img
                  src={selectedPokemon.sprites.front_default}
                  alt={selectedPokemon.name}
                  className="w-32 h-32"
                />
                <img
                  src={selectedPokemon.sprites.back_default}
                  alt={selectedPokemon.name}
                  className="w-32 h-32"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">
                Name: {selectedPokemon.name.toUpperCase()}
              </h2>
              <p className="mb-1">
                <strong>Type 1 : </strong> {selectedPokemon.types[0]?.type.name}
              </p>
              {selectedPokemon.types[1] && (
                <p className="mb-1">
                  <strong>Type 2 : </strong>{" "}
                  {selectedPokemon.types[1].type.name}
                </p>
              )}
              <p className="font-bold mb-1">Base stats : </p>
              <ul className="list-none mb-2">
                {selectedPokemon.stats.map((stat) => (
                  <li key={stat.stat.name} className="capitalize">
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PokemonDex;
