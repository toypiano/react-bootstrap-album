import React from "react";
import PhotoCard from "./PhotoCard";

const Album = props => {
  const cards = [...Array(props.cards)].map(
    (card, i) => <PhotoCard id={i} key={i} />
  );
  return <div className="Main row">{cards}</div>;
};

export default Album;
