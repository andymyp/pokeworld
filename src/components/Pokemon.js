import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../graphql/queries";

import { Card, Image, Info } from "../styles/pokemon";

import { getColor } from "../helpers/getColor";
import { getTypeIcon } from "../helpers/getTypeIcon";
import { Link } from "react-router-dom";

const Pokemon = ({ name, image }) => {
  const pokemons = JSON.parse(localStorage.getItem("myPokemons"));
  let owned = 0;

  const { data } = useQuery(GET_POKEMON, {
    variables: {
      name: name,
    },
  });

  const countOwned = () => {
    pokemons?.map((poke) => {
      if (poke.name === name) {
        owned += 1;
      }
      return true;
    });

    return owned;
  };

  if (data) {
    const { types } = data.pokemon;

    return (
      <Link to={`/pokemon/${name}`}>
        <Card
          style={{
            background: getColor(types[0].type.name)[1],
          }}
        >
          <Image>
            <img src={image} alt={name} />
          </Image>
          <Info>
            <span className="number">Owned: {countOwned()}</span>
            <h5 className="name">{name.toUpperCase()}</h5>
            {types.map((type, i) => (
              <img
                key={i}
                src={getTypeIcon(type.type.name)[1]}
                alt={getTypeIcon(type.type.name)[0]}
                style={{
                  width: "30px",
                  height: "30px",
                  margin: types.length > 1 ? "-0.125rem" : "0",
                  marginTop: "10px",
                }}
              />
            ))}
          </Info>
        </Card>
      </Link>
    );
  } else {
    return null;
  }
};

export default Pokemon;
