import { BsStarFill } from "react-icons/bs";

type Props = {
  function: () => void
  favorite: boolean;
};

const FavoriteButton = (props: Props) => (
  <button
    className={`text-xl ${
      props.favorite
        ? "text-primaryYellow"
        : "text-primaryGrey hover:text-primaryYellow"
    } cursor-pointer`}
    onClick={(e) => {e.stopPropagation(), props.function()}}
  >
    <abbr title={props.favorite ? "Remove to favorites" : "Add to favorites"}>
      <BsStarFill />
    </abbr>
  </button>
)

export default FavoriteButton;
