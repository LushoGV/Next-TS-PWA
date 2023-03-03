import React from "react";
import { IoIosCheckmarkCircle, IoIosCopy } from "react-icons/io";

type Props = {
  status: boolean;
};

const CardStatus = (props: Props) => {
  return (
    <abbr title={`Task ${props.status ? "completed" : "pending"}`}>
      <div className="bg-primaryBlue bg-opacity-10 p-4 rounded-full relative">
        <IoIosCopy className="text-2xl text-primaryBlue" />

        {props.status && (
          <div className="absolute top-0 -right-2 text-2xl">
            {/* <AiFillWarning className="text-red-400 text-2xl"/> */}
            <IoIosCheckmarkCircle className="text-green-500 text-2xl" />
          </div>
        )}
      </div>
    </abbr>
  );
};

export default CardStatus;
