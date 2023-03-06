import { iTask } from "../../interfaces";
import { useModalContext } from "@/context/useModalContext";
import CardMenu from "./CardMenu";
import FavoriteButton from "../FavoriteButton";
import CardStatus from "./CardStatus";
import { useTaskContext } from "@/context/useTaskContext";
import CardDate from "./CardDate";

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
      className="flex flex-col bg-primaryWhite dark:bg-primaryBlack justify-between border-[1px] border-primaryGrey dark:border-primaryBlack min-w-[260px] min-h-[240px] p-3 hover:shadow-lg hover:cursor-pointer lg:hover:-translate-y-3 transition-all duration-300"
    >
      <header className="flex items-start justify-between p-4 pb-1">
        <CardStatus status={props.status} function={statusFunction} />

        <div className="flex items-center mt-2">
          <FavoriteButton favorite={props.favorite} function={favoriteFunction} />
          <CardMenu cardId={props.id} />
        </div>
      </header>

      <section className="px-4 truncate">
        <span className="text-primaryBlue font-semibold">
          {props.short_description}
        </span>
        <h3 className="dark:text-white text-2xl first-letter:uppercase max-w-[230px] md:max-w-none truncate">{props.title}</h3>
      </section>

      <footer className="px-4 py-2">
        <CardDate date={props.date} />
      </footer>
    </article>
  );
};

export default Card;
