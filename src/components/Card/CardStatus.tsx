import { IoIosCheckmarkCircle, IoIosCopy } from "react-icons/io";

type Props = {
  status: boolean;
  function: () => void;
};

const CardStatus = (props: Props) => (
  <abbr title={`Change task status`}>
    <div
      className="bg-primaryBlue bg-opacity-10 p-4 rounded-full relative cursor-pointer border-[1px] border-transparent hover:border-primaryBlue"
      onClick={(e) => {
        e.stopPropagation(), props.function();
      }}
    >
      <IoIosCopy className="text-2xl text-primaryBlue" />

      {props.status && (
        <div className="absolute top-0 -right-2 text-2xl">
          <IoIosCheckmarkCircle className="text-green-500 text-2xl" />
        </div>
      )}
    </div>
  </abbr>
);

export default CardStatus;
