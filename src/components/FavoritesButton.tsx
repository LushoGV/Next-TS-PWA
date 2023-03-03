import React from "react";
import { BsStarFill } from "react-icons/bs";

type Props = {
  favorite: boolean;
};

const FavoritesButton = (props: Props) => (
  <button
    className={`text-xl ${
      props.favorite
        ? "text-primaryYellow"
        : "text-primaryGrey hover:text-primaryYellow"
    } cursor-pointer`}
    onClick={(e) => e.stopPropagation()}
  >
    <abbr title={props.favorite ? "Remove to favorites" : "Add to favorites"}>
      <BsStarFill />
    </abbr>
  </button>
);

export default FavoritesButton;
