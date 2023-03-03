import { iCard } from "../../interfaces";
import { BsStarFill } from "react-icons/bs";
import { IoIosCopy, IoIosCheckmarkCircle } from "react-icons/io";
import { AiFillWarning } from "react-icons/ai";
import { useModalContext } from "@/context/useModalContext";
import CardMenu from "./CardMenu";
import FavoritesButton from "../FavoritesButton";
import CardStatus from "./CardStatus";

const Card = (props: iCard) => {
  const { changeCardModalState } = useModalContext();

  return (
    <article
      onClick={() => changeCardModalState(props.id.toString())}
      className="flex flex-col bg-primaryWhite justify-between border-[1px] border-primaryGrey min-w-[260px] min-h-[240px] p-3 hover:shadow-lg hover:cursor-pointer lg:hover:-translate-y-3 transition-all duration-300"
    >
      <header className="flex items-start justify-between p-4 pb-1">
        <CardStatus status={props.status} />

        <div className="flex items-center mt-2">
          <FavoritesButton favorite={props.favorite} />
          <CardMenu cardId={props.id.toString()} />
        </div>
      </header>

      <section className="px-4">
        <span className="text-primaryBlue font-semibold">
          {props.short_description}
        </span>
        <h3 className="text-xl">{props.title}</h3>
      </section>

      <footer className="px-4 py-2">
        <span className="text-primaryGrey font-semibold text-xs">
          {props.date}
        </span>
      </footer>
    </article>
  );
};

export default Card;
