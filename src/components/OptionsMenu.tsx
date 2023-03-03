import React from "react";
import { MdClose } from "react-icons/md";
import { TbEdit, TbTrash } from "react-icons/tb";

type Props = {
  cardId: string;
  borders?: boolean;
  closeFunction: () => void;
};

const OptionsMenu = (props: Props) => {
  return (
    <ul className="flex">
      <li
        className={`px-2 ${
          props.borders && "border-r-[1px]"
        } border-primaryGrey text-secondaryGrey hover:text-primaryBlue text-2xl cursor-pointer`}
      >
        <abbr title="Edit">
          <TbEdit />
        </abbr>
      </li>
      <li
        className={`px-2 ${
          props.borders && "border-r-[1px]"
        } border-primaryGrey text-secondaryGrey hover:text-red-500 text-2xl cursor-pointer`}
      >
        <abbr title="Delete">
          <TbTrash />
        </abbr>
      </li>
      <li
        className="pl-2 border-primaryGrey text-secondaryGrey hover:text-primaryBlue text-2xl cursor-pointer"
        onClick={() => props.closeFunction()}
      >
        <abbr title="Close">
          <MdClose />
        </abbr>
      </li>
    </ul>
  );
};

export default OptionsMenu;
