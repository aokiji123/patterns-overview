import React from "react";
import {useDogImages} from "./useDogImages.jsx";

export const DogImages = () => {
  const dogs = useDogImages();

  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
}
