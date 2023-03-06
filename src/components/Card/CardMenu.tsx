import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import OptionsMenu from "../OptionsMenu";

type Props = {
  cardId: number;
};

const CardMenu = (props: Props) => {
  const [menuState, setMenuState] = useState(false);

  const changeMenuState = () => setMenuState(!menuState);

  return (
    <div className="ml-2 relative pt-1" onClick={(e) => e.stopPropagation()}>
      <button
        className="text-xl text-primaryGrey hover:text-secondaryGrey"
        onClick={changeMenuState}
      >
        <abbr title="Options">
          <SlOptionsVertical />
        </abbr>
      </button>

      {menuState && (
        <div className="absolute top-0 right-0 flex bg-primaryWhite dark:bg-primaryBlack border-[1px] border-primaryGrey dark:border-primaryBlack shadow-md py-2 pr-2">
          <OptionsMenu closeFunction={changeMenuState} cardId={props.cardId} borders />
        </div>
      )}
    </div>
  );
};

export default CardMenu;
