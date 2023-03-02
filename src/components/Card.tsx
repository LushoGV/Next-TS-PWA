import { iCard } from "../interfaces";
import { BsStarFill } from "react-icons/bs";
import { IoIosCopy, IoIosCheckmarkCircle } from "react-icons/io";
import { AiFillWarning } from "react-icons/ai";
import CardMenu from "./CardMenu";

const Card = (props: iCard) => {
  return (
    <article className="flex flex-col bg-primaryWhite justify-between border-[1px] border-primaryGrey min-w-[260px] min-h-[240px] p-3 hover:shadow-lg hover:cursor-pointer lg:hover:-translate-y-3 transition-all duration-300">
      <header className="flex items-start justify-between p-4 pb-1">
        <div className="bg-primaryBlue bg-opacity-10 p-4 rounded-full relative">
          <IoIosCopy className="text-2xl text-primaryBlue" />

          {props.status && (
            <div className="absolute top-0 -right-2 text-2xl">
              {/* <AiFillWarning className="text-red-400 text-2xl"/> */}
              <IoIosCheckmarkCircle className="text-green-500 text-2xl" />
            </div>
          )}
        </div>

        <div className="flex mt-2">
          <button
            className={`text-xl ${
              props.favorite
                ? "text-primaryYellow"
                : "text-primaryGrey hover:text-primaryYellow"
            }  px-3 cursor-pointer`}
          >
            <abbr
              title={
                props.favorite ? "Remove to favorites" : "Add to favorites"
              }
            >
              <BsStarFill />
            </abbr>
          </button>
          <CardMenu />
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
