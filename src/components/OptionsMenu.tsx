import React from "react";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useTaskContext } from "@/context/useTaskContext";

type Props = {
  cardId: number;
  borders?: boolean;
  closeFunction: () => void;
};

const OptionsMenu = (props: Props) => {
  const {removeTask} = useTaskContext()
  const router = useRouter();

  const editFunction = () => {
    props.closeFunction();
    router.push({
      pathname: `/tasks/${props.cardId}`,
      query: { id: props.cardId },
    });
  }

  const deleteFunction = () => {
    console.log("first")
    removeTask(props.cardId)
  }

  return (
    <ul className="flex">
      <li
        className={`px-2 ${
          props.borders && "border-r-[1px]"
        } border-primaryGrey text-secondaryGrey hover:text-primaryBlue text-2xl cursor-pointer`}
        onClick={editFunction}
      >
        <abbr title="Edit">
          <TbEdit />
        </abbr>
      </li>
      <li
        className={`px-2 ${
          props.borders && "border-r-[1px]"
        } border-primaryGrey text-secondaryGrey hover:text-red-500 text-2xl cursor-pointer`}
        onClick={deleteFunction}
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
