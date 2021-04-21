import normal from "../assets/typeIcons/normal.png";
import fire from "../assets/typeIcons/fire.png";
import fighting from "../assets/typeIcons/fighting.png";
import water from "../assets/typeIcons/water.png";
import flying from "../assets/typeIcons/flying.png";
import grass from "../assets/typeIcons/grass.png";
import poison from "../assets/typeIcons/poison.png";
import electric from "../assets/typeIcons/electric.png";
import ground from "../assets/typeIcons/ground.png";
import psychic from "../assets/typeIcons/psychic.png";
import rock from "../assets/typeIcons/rock.png";
import ice from "../assets/typeIcons/ice.png";
import bug from "../assets/typeIcons/bug.png";
import dragon from "../assets/typeIcons/dragon.png";
import ghost from "../assets/typeIcons/ghost.png";
import dark from "../assets/typeIcons/dark.png";
import steel from "../assets/typeIcons/steel.png";
import fairy from "../assets/typeIcons/fairy.png";

export const getTypeIcon = (type) => {
  const typesIcon = {
    normal,
    fire,
    fighting,
    water,
    flying,
    grass,
    poison,
    electric,
    ground,
    psychic,
    rock,
    ice,
    bug,
    dragon,
    ghost,
    dark,
    steel,
    fairy,
  };

  const _typeIcon = Object.entries(typesIcon).filter(
    ([key, _]) => key === type
  );
  return _typeIcon[0];
};
