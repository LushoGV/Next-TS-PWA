import { useTaskContext } from "@/context/useTaskContext";
import { iTask, iFilters } from "@/interfaces";
import { useEffect, useState } from "react";
import CardSection from "./CardSection";

type Props = {
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

  const sortFunction = (dataToSort: iTask[]): iTask[] => {
    switch (props.filters.orderBy) {
      case 0:
        return dataToSort.sort((a: iTask, b: iTask) => {
          if (a.title < b.title) return -1;

          if (a.title > b.title) return 1;

          return 0;
        });

      case 1:
        return dataToSort.sort((a: iTask, b: iTask) => {
          if (a.title > b.title) return -1;

          if (a.title < b.title) return 1;

          return 0;
        });

      case 2:
        return dataToSort.sort((a: iTask, b: iTask) => {
          if (a.date < b.date) return -1;

          if (a.date > b.date) return 1;

          return 0;
        });

      default:
        return dataToSort;
    }
  };

  const filterBySection = (dataToFilter: iTask[], section?: string): iTask[] => {
    switch (section) {
      case "favorites":
        return dataToFilter.filter((element) => element.favorite);

      case "pending":
        return dataToFilter.filter((element) => !element.status);

      case "completed":
        return dataToFilter.filter((element) => element.status);

      default:
        return dataToFilter;
    }
  };

  const filterByInput = (): iTask[] | [] => {
    return sortFunction(tasks).filter((element) =>
      element.title
        .toLowerCase()
        .trim()
        .startsWith(props.filters.inputValue.toLowerCase().trim())
    );
  };

  const filterWithoutInput = (dataToFilter: iTask[]) => {
    const data = sortFunction(dataToFilter);

    const favorites = filterBySection(data, "favorites");
    const pending = filterBySection(data, "pending");
    const completed = filterBySection(data, "completed");

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
      setSearchContent(filterByInput());
    } else {
      filterWithoutInput(tasks);
    }
  }, [props.filters.inputValue]);

  useEffect(() => {
    if (props.filters.inputValue.length) {
      setSearchContent(filterByInput());
    } else {
      filterWithoutInput(tasks);
    }
  }, [props.filters.orderBy]);


  if (props.filters.inputValue.length > 0)
    return (
      <CardSection
        title={`results of ${props.filters.inputValue}`}
        cardList={filterBySection(searchContent, props.filters.section)}
        layoutMode={props.layoutMode}
      />
    );

  if (props.filters.section !== "all")
    return (
      <>
        {filterBySection(tasks, props.filters.section).length > 0 && (
          <CardSection
            cardList={filterBySection(tasks, props.filters.section)}
            title={props.filters.section}
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
