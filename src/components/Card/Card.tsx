import { iTask } from "../../interfaces";
import { useModalContext } from "@/context/useModalContext";
import CardMenu from "./CardMenu";
import FavoriteButton from "../FavoriteButton";
import CardStatus from "./CardStatus";
import { useTaskContext } from "@/context/useTaskContext";

const Card = (props: iTask) => {
  const { changeCardModalState } = useModalContext();
  const {changeTaskState} = useTaskContext()

  const favoriteFunction = () => 
    changeTaskState(props.id, "favorite")

  const statusFunction = () => 
    props.id && changeTaskState(props.id, "status")

  return (
    <article
      onClick={() => changeCardModalState(props.id)}
      className="flex flex-col bg-primaryWhite justify-between border-[1px] border-primaryGrey min-w-[260px] min-h-[240px] p-3 hover:shadow-lg hover:cursor-pointer lg:hover:-translate-y-3 transition-all duration-300"
    >
      <header className="flex items-start justify-between p-4 pb-1">
        <CardStatus status={props.status} function={statusFunction} />

        <div className="flex items-center mt-2">
          <FavoriteButton favorite={props.favorite} function={favoriteFunction} />
          <CardMenu cardId={props.id} />
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
