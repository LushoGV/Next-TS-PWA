import { useModalContext } from "@/context/useModalContext";
import { useState, useEffect } from "react";
import { iTask } from "@/interfaces";
import OptionsMenu from "../OptionsMenu";
import FavoriteButton from "../FavoriteButton";
import CardStatus from "../Card/CardStatus";
import { useTaskContext } from "@/context/useTaskContext";
import CardDate from "../Card/CardDate";

type Props = {
  id?: number;
};

const CardModal = (props: Props) => {
  const [cardContent, setCardContent] = useState<iTask>();
  const { changeCardModalState } = useModalContext();
  const { tasks, changeTaskState } = useTaskContext();

  const favoriteFunction = () => {
    props.id && changeTaskState(props.id, "favorite");
  };

  const statusFunction = () => {
    props.id && changeTaskState(props.id, "status");
  };

  useEffect(() => {
    if (props.id) {
      const cardFinded = tasks.filter((element) => element.id === props.id);
      setCardContent(cardFinded[0]);
    }
  }, [props.id]);

  return (
    <article
      className="z-40 bg-primaryWhite border-[1px] border-secondaryGrey max-w-xl w-full mx-2"
      onClick={(e) => e.stopPropagation()}
    >
      <header className="flex items-start justify-between p-4">
        {cardContent && (
          <CardStatus status={cardContent?.status} function={statusFunction} />
        )}

        <div className="flex flex-row-reverse items-center mt-1">
          {cardContent && (
            <>
              <OptionsMenu
                cardId={cardContent.id}
                closeFunction={changeCardModalState}
              />
            </>
          )}
        </div>
      </header>

      <section className="py-2 px-5">
        <header className="mb-6 max-w-[500px] truncate">
          <span className="text-base font-semibold text-primaryBlue">
            {cardContent?.short_description}
          </span>
          <h1 className="text-xl font-semibold first-letter:uppercase max-w-[500px] truncate">{cardContent?.title}</h1>
        </header>
        <section>{cardContent?.description}</section>
      </section>

      <footer className="p-4 flex items-center justify-between first-letter:uppercase text-secondaryGrey">
        {cardContent && (
          <>
            <CardDate date={cardContent?.date} />
            <div className="flex items-center">
              <FavoriteButton
                favorite={cardContent?.favorite}
                function={favoriteFunction}
              />
            </div>
          </>
        )}
      </footer>
    </article>
  );
};

export default CardModal;
