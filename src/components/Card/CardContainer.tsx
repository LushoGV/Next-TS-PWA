import { iCard, iFilters } from "@/interfaces";
import { useEffect, useState } from "react";
import CardSection from "./CardSection";

type Props = {
  cardList: iCard[];
  filters: iFilters;
  filtersBarState: boolean;
  layoutMode: string;
};

interface iCardContainer {
  title: string;
  data: iCard[] | [];
}

const CardContainer = (props: Props) => {
  const [content, setContent] = useState<iCardContainer[]>([
    { title: "favorites", data: [] },
    { title: "pending", data: [] },
    { title: "completed", data: [] },
  ]);

  const filterDataByInput = (): iCard[] | [] => {
    const filteredData = props.cardList.filter((element) =>
      element.title
        .toLowerCase()
        .trim()
        .startsWith(props.filters.inputValue.toLowerCase().trim())
    );

    return filteredData;
  };

  const filterWithoutInput = (dataToFilter: iCard[]) => {
    const favorites = dataToFilter.filter((element) => element.favorite);
    const pending = dataToFilter.filter((element) => !element.status);
    const completed = dataToFilter.filter((element) => element.status);

    setContent([
      { title: content[0].title, data: favorites },
      { title: content[1].title, data: pending },
      { title: content[2].title, data: completed },
    ]);
  };

  useEffect(() => {
    if (props.cardList.length) {
      filterWithoutInput(props.cardList);
    }
  }, [props.cardList]);

  useEffect(() => {
    if (props.filters.inputValue.length) {
      filterWithoutInput(filterDataByInput());
    } else {
      filterWithoutInput(props.cardList);
    }
  }, [props.filters.inputValue]);

  if (props.filters.section === "pending")
    return (
      <>
        {content[1].data.length > 0 && (
          <CardSection
            title={null}
            cardList={content[1].data}
            layoutMode={props.layoutMode}
          />
        )}
      </>
    );

  if (props.filters.section === "completed")
    return (
      <>
        {content[2].data.length > 0 && (
          <CardSection
            title={null}
            cardList={content[2].data}
            layoutMode={props.layoutMode}
          />
        )}
      </>
    );

  return (
    <>
      {content.map(
        (element, index) =>
          element.data.length > 0 && (
            <CardSection
              key={index}
              title={element.title}
              cardList={element.data}
              layoutMode={props.layoutMode}
            />
          )
      )}
    </>
  );
};

export default CardContainer;
