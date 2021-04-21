import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Close, Container, Details, Wrapper } from "../styles/detailPokemon";

import { GET_POKEMON_DETAIL } from "../graphql/queries";

import { useAppContext } from "../contexts/AppProvider";
import Profile from "../components/Profile";

const DetailPokemon = (props) => {
  const { setIsLoading } = useAppContext();
  const { name } = useParams();

  const { loading, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name: name,
    },
  });

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    }

    if (data) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [loading, setIsLoading, data]);

  if (data) {
    const {
      id,
      abilities,
      height,
      moves,
      sprites,
      stats,
      types,
      weight,
    } = data.pokemon;

    return (
      <Wrapper>
        <Container>
          <Close onClick={() => props.history.goBack()}>
            <i className="fa fa-times"></i>
          </Close>
          <div className="row">
            <Profile
              id={id}
              name={name}
              types={types}
              sprites={sprites}
              height={height}
              weight={weight}
              stats={stats}
            />
            <Details>
              <div className="abilities">
                <h3>Abilities</h3>
                {abilities.map((ab, i) => (
                  <span key={i}>{ab.ability.name}</span>
                ))}
              </div>
              <div className="moves">
                <h3>Moves</h3>
                {moves.map((mv, i) => (
                  <span key={i}>{mv.move.name}</span>
                ))}
              </div>
            </Details>
          </div>
        </Container>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default DetailPokemon;
