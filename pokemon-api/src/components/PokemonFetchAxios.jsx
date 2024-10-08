import { useEffect, useState } from "react";
import axios from "axios";

const typeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-500",
  psychic: "bg-pink-500",
  ice: "bg-blue-200",
  dragon: "bg-purple-500",
  dark: "bg-gray-800",
  fairy: "bg-pink-300",
  normal: "bg-gray-400",
  fighting: "bg-orange-700",
  flying: "bg-indigo-300",
  poison: "bg-purple-700",
  ground: "bg-yellow-700",
  rock: "bg-yellow-900",
  bug: "bg-green-700",
  ghost: "bg-purple-900",
  steel: "bg-gray-500",
};

const PokemonFetchAxios = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?offset=0&amp;limit=151"
        );
        const results = response.data.results;
        const detailedPromises = results.map((pokemon) =>
          axios.get(pokemon.url)
        );
        const detailedResponses = await Promise.all(detailedPromises);
        const detailPokemonList = detailedResponses.map((res) => res.data);
        setPokemonList(detailPokemonList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#8ac55f] p-4 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-white">Pokemon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="bg-white rounded shadow-md p-4">
            <h2 className="text-xl font-bold mb-2 capitalize flex justify-center">
              {pokemon.name}
            </h2>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-32 h-32 mx-auto mb-2"
            />
            <div className="flex justify-center">
              {pokemon.types.map((typeInfo) => (
                <span
                  key={typeInfo.type.name}
                  className={`px-4 py-1 rounded-full text-white text-sm ${
                    typeColors[typeInfo.type.name]
                  } mx-1`}
                >
                  {typeInfo.type.name}
                </span>
              ))}
            </div>
            <div className="pt-4">
              <h2 className="font-bold">Name : {pokemon.name}</h2>
              <p className="font-bold">Base Stats :</p>
              <p>
                HP :{" "}
                {
                  pokemon.stats.find((stat) => stat.stat.name === "hp")
                    .base_stat
                }
              </p>
              <p>
                Attack :{" "}
                {
                  pokemon.stats.find((stat) => stat.stat.name === "attack")
                    .base_stat
                }
              </p>
              <p>
                Defense :{" "}
                {
                  pokemon.stats.find((stat) => stat.stat.name === "defense")
                    .base_stat
                }
              </p>
              <p>
                Special-Attack :{" "}
                {
                  pokemon.stats.find(
                    (stat) => stat.stat.name === "special-attack"
                  ).base_stat
                }
              </p>
              <p>
                Special-Defense :{" "}
                {
                  pokemon.stats.find(
                    (stat) => stat.stat.name === "special-defense"
                  ).base_stat
                }
              </p>
              <p>
                Speed :{" "}
                {
                  pokemon.stats.find((stat) => stat.stat.name === "speed")
                    .base_stat
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonFetchAxios;
