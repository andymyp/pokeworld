import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../graphql/queries";

import { Button, Card, Image, Info } from "../styles/myPokemon";

import { getColor } from "../helpers/getColor";
import { getTypeIcon } from "../helpers/getTypeIcon";
import { Link } from "react-router-dom";

const MyPokemon = ({ name, image, nickname, onRelease }) => {
  const { data } = useQuery(GET_POKEMON, {
    variables: {
      name: name,
    },
  });

  if (data) {
    const { types } = data.pokemon;

    return (
      <Card
        style={{
          background: getColor(types[0].type.name)[1],
        }}
      >
        <Image>
          <img src={image} alt={name} />
        </Image>
        <Link to={`/pokemon/${name}`}>
          <Info>
            <h5 className="nickname">{nickname}</h5>
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
        </Link>
        <Button type="button" onClick={() => onRelease(nickname)}>
          Release
        </Button>
      </Card>
    );
  } else {
    return null;
  }
};

export default MyPokemon;
