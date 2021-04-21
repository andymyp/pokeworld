import React, { useEffect, useState } from "react";

import Modal from "./Modal";
import Catching from "./Catching";
import InputName from "./InputName";
import Failed from "./Failed";

const Catch = ({ showCatch, setShowCatch, name, image }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [nickname, setNickname] = useState("");
  const myPokemons = JSON.parse(localStorage.getItem("myPokemons"));

  const savePokemon = () => {
    if (nickname === "") {
      alert("Input pokemon nickname!");
    } else {
      let found = false;
      if (myPokemons) {
        myPokemons.map((poke) => {
          if (poke.nickname === nickname) {
            found = true;
          }
          return true;
        });
      }

      if (found) {
        alert("Nickname already in use!");
      } else {
        if (myPokemons) {
          myPokemons.push({
            name: name,
            image: image,
            nickname: nickname,
          });
          localStorage.setItem("myPokemons", JSON.stringify(myPokemons));
        } else {
          localStorage.setItem(
            "myPokemons",
            JSON.stringify([
              {
                name: name,
                image: image,
                nickname: nickname,
              },
            ])
          );
        }

        setIsSuccess(false);
        alert("Pokemon successfully saved");
      }
    }
  };

  useEffect(() => {
    const catchingPokemon = () => {
      // Catch with 50% success possibility
      if (Math.random() > 0.5) {
        setIsSuccess(true);
        setIsFailed(false);
      } else {
        setIsSuccess(false);
        setIsFailed(true);
      }
      setShowCatch(false);
    };

    if (showCatch) {
      setTimeout(() => {
        setNickname("");
        catchingPokemon();
      }, 5000);
    }
  }, [showCatch, setShowCatch]);

  return (
    <div>
      <Modal title="Catching..." body={<Catching />} showModal={showCatch} />
      <Modal
        title="GOTCHA!"
        body={
          <>
            <img src={image} alt={name} width="150px" />
            <p style={{ margin: "0px", marginBottom: "20px" }}>
              <b>{name.toUpperCase()}</b> was caught!
            </p>
            <InputName
              value={nickname}
              onInput={(e) => setNickname(e.target.value)}
            />
          </>
        }
        showModal={isSuccess}
        setShowModal={setIsSuccess}
        hasClose={true}
        hasFooter={true}
        onConfirm={() => savePokemon()}
      />
      <Modal
        title="Failed"
        body={<Failed />}
        showModal={isFailed}
        setShowModal={setIsFailed}
        hasClose={true}
      />
    </div>
  );
};

export default Catch;
