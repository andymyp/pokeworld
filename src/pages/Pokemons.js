import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";

import { Button, Container } from "../styles/pokemons";

import { useAppContext } from "../contexts/AppProvider";
import Pokemon from "../components/Pokemon";

const Pokemons = () => {
  const { setIsLoading } = useAppContext();

  const { loading, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
      limit: 15,
      offset: 0,
    },
  });

  const loadMore = async () => {
    await fetchMore({
      variables: {
        offset: data.pokemons.nextOffset,
      },
    });
  };

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    }

    if (data) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [loading, data, setIsLoading]);

  return (
    <div>
      <Container>
        {data?.pokemons.results.map((poke, i) => (
          <Pokemon key={i} {...poke} />
        ))}
      </Container>
      <Container>
        <Button type="button" onClick={() => loadMore()}>
          Load more
        </Button>
      </Container>
    </div>
  );
};

export default Pokemons;
