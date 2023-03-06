import { iTask } from "@/interfaces";
import Card from "./Card";

type Props = {
  title: string | null;
  cardList: iTask[];
  layoutMode: string;
};

const CardSection = (props: Props) => (
  <section className="mb-8 mx-4 lg:mx-0">
    {props.title !== null && (
      <header className="py-6 text-3xl first-letter:uppercase text-secondaryBlue dark:text-primaryDarkModeBlue max-w-[478px] lg:max-w-none truncate">
        {props.title}
      </header>
    )}
    <section
      className={`${
        props.layoutMode === "grid" ? "grid" : "flex flex-col"
      } sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6 ${props.title === null && "py-6"}`}
    >
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
