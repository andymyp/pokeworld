import React, { useState } from "react";

import { Button, Container, Image, Info } from "../styles/profile";

import { getColor } from "../helpers/getColor";
import { getTypeIcon } from "../helpers/getTypeIcon";

import Catch from "./Catch";

const Profile = ({ id, name, types, sprites, height, weight, stats }) => {
  const [showCatch, setShowCatch] = useState(false);

  const pokemons = JSON.parse(localStorage.getItem("myPokemons"));
  let owned = 0;

  const countOwned = () => {
    pokemons?.map((poke) => {
      if (poke.name === name) {
        owned += 1;
      }
      return true;
    });

    return owned;
  };

  return (
    <Container
      style={{
        background: getColor(types[0].type.name)[1],
      }}
    >
      <span className="id">#{id.toString().padStart(3, "0")}</span>
      <Image>
        <img src={sprites.front_default} alt={name} />
      </Image>
      <Info>
        <span className="number">Owned: {countOwned()}</span>
        <h5 className="name">{name.toUpperCase()}</h5>
        <div className="row">
          <div className="weight">
            <p>{weight}</p>
            <span>WEIGHT</span>
          </div>
          <div className="row">
            {types.map((type, i) => (
              <div className="type" key={i}>
                <img
                  src={getTypeIcon(type.type.name)[1]}
                  alt={getTypeIcon(type.type.name)[0]}
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
                <p>{type.type.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
          <div className="height">
            <p>{height}</p>
            <span>HEIGHT</span>
          </div>
        </div>
        <div className="stats">
          {stats.map((st, i) => (
            <div className="stat" key={i}>
              <p>{st.stat.name.toUpperCase()}</p>
              <span>{st.base_stat}</span>
            </div>
          ))}
        </div>
      </Info>
      <Button type="button" onClick={() => setShowCatch(true)}>
        CATCH
      </Button>
      <Catch
        showCatch={showCatch}
        setShowCatch={setShowCatch}
        name={name}
        image={sprites.front_default}
      />
    </Container>
  );
};

export default Profile;
