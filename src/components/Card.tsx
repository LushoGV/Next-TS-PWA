import React from "react";
import { iCard } from "../interfaces";
import { BsStarFill } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";

type Props = {};

const Card = (props: iCard) => {
  const parseDate = () => {
    const test = new Date(props.date);
    console.log(test);
  };

  parseDate();

  return (
    <article>
      <header className="flex justify-between">
        <div></div>

        <div className="flex">
          <button>
            <BsStarFill />
          </button>
          <button>
            <SlOptionsVertical />
          </button>
        </div>
      </header>

      <section className="py-2">
        <span>{props.short_description}</span>
        <h3>{props.title}</h3>
      </section>

      <footer>{/* <span>{props.date}</span> */}</footer>
    </article>
  );
};

export default Card;
