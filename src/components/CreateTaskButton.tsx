import React from "react";
import { MdAdd, MdClose } from "react-icons/md";

type Props = {};

const CreateTaskButton = (props: Props) => {
  return (
    <button className="lg:hidden mt-2 my-5 border-[1px] border-primaryGrey bg-primaryBlue p-4 rounded-full shadow-md">
      <span className="text-primaryWhite text-3xl">
        <abbr title="Create task">
          <MdAdd />
        </abbr>
      </span>
    </button>
  );
};

export default CreateTaskButton;
