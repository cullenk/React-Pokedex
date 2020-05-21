import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading';
import Header from './Header';
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeNumber, setPokeNumber] = useState(1);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/' + pokeNumber);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      setPokeNumber(parseInt(res.data.id));
      setNextPageUrl('https://pokeapi.co/api/v2/pokemon/' + (pokeNumber + 1));
      setPrevPageUrl('https://pokeapi.co/api/v2/pokemon/' + (pokeNumber - 1));
      let typeTwo = false;
      if (res.data.types.length === 2) {
        typeTwo = true;
      }
      setPokemon({
        image: res.data.sprites.front_shiny,
        name: res.data.name,
        id: res.data.id,
        typeOne: res.data.types[0].type.name,
        typeTwo: typeTwo ? res.data.types[1].type.name: null
      });
    });

    return () => {
      cancel();
    };
  }, [currentPageUrl]);

  function goToNextPage() {
    setPokeNumber(pokeNumber + 1);
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setPokeNumber(pokeNumber - 1);
    setCurrentPageUrl(prevPageUrl);
  }

if (loading) return (
  <Loading />
)

  return (
    <>
      <Header />
      <PokemonList
      // goToSelectedPage={goToSelectedPage}
      image={pokemon.image}
      name={pokemon.name}
      id={pokemon.id}
      typeOne={pokemon.typeOne}
      typeTwo={pokemon.typeTwo ? pokemon.typeTwo : null}
      />
      <Pagination
      goToNextPage={pokeNumber < 802 ? goToNextPage : null}
      goToPrevPage={pokeNumber > 1 ? goToPrevPage : null}
      />
    </>
  );
}


export default App;
