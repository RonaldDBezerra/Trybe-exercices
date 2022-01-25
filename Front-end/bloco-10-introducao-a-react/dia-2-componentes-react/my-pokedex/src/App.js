
import './App.css';
import pokemons from './data';
import CreatPokemon from './cardPokemon';

function App() {
  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      
      <main className='main-content'>
        <CreatPokemon />
      </main>
    </>
  );
}

export default App;
