import PokemonDex from "./components/PokemonDex";
import PokemonFetchAxios from "./components/PokemonFetchAxios";

const App = () => {
  return (
    <div>
      <PokemonDex />
      <PokemonFetchAxios />;
    </div>
  );
};

export default App;
