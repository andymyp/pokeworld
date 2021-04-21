import React, { useEffect } from "react";

import { Container, Center } from "../styles/myPokemons";

import { useAppContext } from "../contexts/AppProvider";
import MyPokemon from "../components/MyPokemon";
import Catching from "../components/Catching";

const MyPokemons = () => {
  const pokemons = JSON.parse(localStorage.getItem("myPokemons"));
  const { setIsLoading, myPokemons, setMyPokemons } = useAppContext();

  const onRelease = (nickname) => {
    if (pokemons.length > 1) {
      const filtered = pokemons.filter((poke) => poke.nickname !== nickname);
      localStorage.setItem("myPokemons", JSON.stringify(filtered));
      setMyPokemons(filtered);
    } else {
      localStorage.removeItem("myPokemons");
      setMyPokemons("");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setMyPokemons(pokemons);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (myPokemons) {
    return (
      <Container>
        {myPokemons?.map((poke, i) => (
          <MyPokemon key={i} {...poke} onRelease={onRelease} />
        ))}
      </Container>
    );
  } else {
    return (
      <Center>
        <Catching />
      </Center>
    );
  }
};

export default MyPokemons;
