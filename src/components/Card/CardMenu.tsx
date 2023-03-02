import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { MdClose } from "react-icons/md";
import { TbEdit, TbTrash } from "react-icons/tb";

const CardMenu = () => {
  const [menuState, setMenuState] = useState(false);

  const changeMenuState = () => setMenuState(!menuState);

  return (
    <div className="relative pt-1">
      <button
        className="text-xl text-primaryGrey hover:text-secondaryGrey"
        onClick={changeMenuState}
      >
        <abbr title="Options">
          <SlOptionsVertical />
        </abbr>
      </button>

      {menuState && (
        <ul className="absolute top-0 right-0 flex bg-primaryWhite border-[1px] border-primaryGrey shadow-md">
          <li className="p-2 border-r-[1px] border-primaryGrey text-secondaryGrey hover:text-primaryBlue text-2xl">
            <abbr title="Edit">
              <TbEdit />
            </abbr>
          </li>
          <li className="p-2 border-r-[1px] border-primaryGrey text-secondaryGrey hover:text-red-500 text-2xl">
            <abbr title="Delete">
              <TbTrash />
            </abbr>
          </li>
          <li
            className="p-2 border-primaryGrey text-secondaryGrey hover:text-primaryBlue text-2xl"
            onClick={changeMenuState}
          >
            <abbr title="Close">
              <MdClose />
            </abbr>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CardMenu;
