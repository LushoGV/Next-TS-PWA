import { iCard } from "@/interfaces";
import React from "react";
import Card from "./Card";

type Props = {
  title: string;
  cardList: iCard[];
};

const CardSection = (props: Props) => (
  <section>
    <header className="py-6 text-2xl first-letter:uppercase">
      {props.title}
    </header>
    <section className="flex">
      {props.cardList.map((element, index) => (
        <Card
          key={index}
          id={element.id}
          title={element.title}
          status={element.status}
          date={element.date}
          short_description={element.short_description}
          favorite={element.favorite}
          description={element.description}
        />
      ))}
    </section>
  </section>
);

export default CardSection;
