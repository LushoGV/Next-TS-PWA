import { useTaskContext } from "@/context/useTaskContext";
import { iTask, iFilters } from "@/interfaces";
import { useEffect, useState } from "react";
import CardSection from "./CardSection";

type Props = {
  cardList: iTask[];
  filters: iFilters;
  filtersBarState: boolean;
  layoutMode: string;
};

interface iCardContainer {
  title: string;
  data: iTask[] | [];
}

const CardContainer = (props: Props) => {
  const [content, setContent] = useState<iCardContainer[]>([
    { title: "favorites", data: [] },
    { title: "pending", data: [] },
    { title: "completed", data: [] },
  ]);
  const [searchContent, setSearchContent] = useState<iTask[] | []>([]);

  const { tasks } = useTaskContext();

  const sortFunction = (data: iTask[]): iTask[] => {
    let sortedData = data;

    switch (props.filters.orderBy) {
      case 0:
        sortedData = data.sort((a: iTask, b: iTask) => {
          if (a.title < b.title) return -1;

          if (a.title > b.title) return 1;

          return 0;
        });
        break;

      case 1:
        sortedData = data.sort((a: iTask, b: iTask) => {
          if (a.title > b.title) return -1;

          if (a.title < b.title) return 1;

          return 0;
        });
        break;

      case 2:
        sortedData = data.sort((a: iTask, b: iTask) => {
          if (a.date < b.date) return -1;

          if (a.date > b.date) return 1;

          return 0;
        });
        break;

      default:
        break;
    }

    // console.log(sortedData);
    return sortedData;
  };

  const filterDataByInput = (): iTask[] | [] => {
    const filteredData = tasks.filter((element) =>
      element.title
        .toLowerCase()
        .trim()
        .startsWith(props.filters.inputValue.toLowerCase().trim())
    );

    return filteredData;
  };

  const filterWithoutInput = (dataToFilter: iTask[]) => {
    const data = sortFunction(dataToFilter);

    const favorites = data.filter((element) => element.favorite);
    const pending = data.filter((element) => !element.status);
    const completed = data.filter((element) => element.status);

    setContent([
      { title: content[0].title, data: favorites },
      { title: content[1].title, data: pending },
      { title: content[2].title, data: completed },
    ]);
  };

  useEffect(() => {
    if (tasks.length) {
      filterWithoutInput(tasks);
    } else {
      setContent([
        { title: content[0].title, data: [] },
        { title: content[1].title, data: [] },
        { title: content[2].title, data: [] },
      ]);
    }
  }, [tasks]);

  useEffect(() => {
    if (props.filters.inputValue.length) {
      setSearchContent(filterDataByInput());
    } else {
      filterWithoutInput(tasks);
    }
  }, [props.filters.inputValue]);

  useEffect(() => {
    if (props.filters.inputValue.length) {
      filterWithoutInput(filterDataByInput());
    } else {
      filterWithoutInput(tasks);
    }
  }, [props.filters.orderBy]);

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

  if (props.filters.inputValue.length > 0)
    return (
      <CardSection
        title={`results of ${props.filters.inputValue}`}
        cardList={searchContent}
        layoutMode={props.layoutMode}
      />
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
