import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";

type Props = {};

const ScrollToTopButton = (props: Props) => {
  return (
    <button className="m-5 mb-0 lg:mb-5 border-[1px] border-primaryGrey bg-primaryWhite p-2 rounded-full">
      <div className="border-[2px] border-primaryBlue bg-primaryWhite rounded-full">
        <BiUpArrowAlt className="text-primaryBlue text-2xl" />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
