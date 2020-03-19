import React from "react";

const typeIcons = {
  bug: "bug",
  dragon: "dragon",
  electric: "bolt",
  fighting: "fist-raised",
  fire: "flame",
  flying: "feather-alt",
  grass: "leaf",
  ghost: "ghost",
  ground: "shovel",
  ice: "icicles",
  normal: "dot-circle",
  poison: "flask-poison",
  psychic: "head-side-brain",
  rock: "mountains",
  water: "water"
};

export default function PokemonType(props) {
  const { type, handleClick } = props;
  const typeName = type.toLowerCase();
  const icon = typeIcons[typeName];
  const iconClass = `fal fa-${icon}`;
  const typeClass = `pokemon-type text-is-color--${typeName}`;
  const handleTypeClick = type => {
    return handleClick ? handleClick(type) : undefined;
  };

  return (
    <div className={typeClass} onClick={() => handleTypeClick(type)}>
      <i className={iconClass}></i>
    </div>
  );
}
