import { useModalContext } from "@/context/useModalContext";
import { useState, useEffect } from "react";
import { IoIosCheckmarkCircle, IoIosCopy } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { iCard } from "@/interfaces";
import OptionsMenu from "../OptionsMenu";
import FavoritesButton from "../FavoritesButton";
import CardStatus from "../Card/CardStatus";
import CardMenu from "../Card/CardMenu";
import data from "../../fakeData.json";

type Props = {
  id?: boolean | string;
};

const CardModal = (props: Props) => {
  const [cardContent, setCardContent] = useState<iCard>();
  const { changeCardModalState } = useModalContext();

  useEffect(() => {
    if (props.id) {
      const cardFinded = data.cards.filter(
        (element) => element.id.toString() === props.id
      );
      setCardContent(cardFinded[0]);
    }
  }, [props.id]);

  return (
    <article className="z-40 bg-primaryWhite border-[1px] border-secondaryGrey max-w-xl w-full mx-2" onClick={(e) => e.stopPropagation()}>
      <header className="flex items-start justify-between p-4">
      {cardContent && <CardStatus status={cardContent?.status}/>}

        <div className="flex flex-row-reverse items-center mt-1">
          {cardContent && (
            <>
              <OptionsMenu
                cardId={cardContent.id.toString()}
                closeFunction={changeCardModalState}
              />
            </>
          )}
        </div>
      </header>

      <section className="py-2 px-5">
        <header className="mb-6">
          <span className="text-base font-semibold text-primaryBlue">
            {cardContent?.short_description}
          </span>
          <h1 className="text-xl font-semibold">{cardContent?.title}</h1>
        </header>
        <section>{cardContent?.description}</section>
      </section>

      <footer className="p-4 flex items-center justify-between first-letter:uppercase text-secondaryGrey">
        <span>{cardContent?.date}</span>
        {cardContent && (
          <div className="flex items-center">
            <FavoritesButton favorite={cardContent?.favorite} />
          </div>
        )}
      </footer>
    </article>
  );
};

export default CardModal;
