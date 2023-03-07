import { useState } from "react";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { HiOutlineViewList } from "react-icons/hi";
import SortButton from "./SortButton";

type Props = {
  changeFilters: (filterName: string, value: string | number) => void;
  changeLayout: React.Dispatch<React.SetStateAction<string>>;
  layoutMode: string;
};

const tabOptions = ["all", "pending", "completed"];
const layoutOptions = [
  { name: "grid", icon: <TfiLayoutGrid2Alt /> },
  { name: "list", icon: <HiOutlineViewList /> },
];

const FiltersBar = (props: Props) => {
  const [tabSelected, setTabSelected] = useState<number>(0);

  return (
    <nav className="max-w-7xl w-full mx-auto lg:mb-2 lg:px-4 flex flex-col-reverse lg:flex-row border-b-[1px] border-primaryGrey dark:border-primaryBlack">
      <ul className="flex mx-auto w-full lg:w-auto lg:ml-0 text-sm">
        {tabOptions.map((element, index) => (
          <li
            key={index}
            onClick={() => {
              setTabSelected(index), props.changeFilters("section", element);
            }}
            className={`${
              tabSelected === index
                ? "border-primaryBlue text-primaryBlue"
                : "border-[#00000000] text-secondaryGrey hover:text-primaryBlue"
            } border-b-[2px] px-4 lg:mr-2 py-[10px] uppercase cursor-pointer w-full lg:w-auto text-center transition-all duration-150`}
          >
            {element}
          </li>
        ))}
      </ul>

      <section className="flex w-full lg:w-auto mb-5 lg:m-0 px-4 lg:px-0">
        <SortButton changeFilters={props.changeFilters} />

        <div className="hidden lg:flex">
          {layoutOptions.map((element, index) => (
            <button
              className={`${
                props.layoutMode === element.name
                  ? "text-primaryBlue"
                  : "text-secondaryGrey"
              } ${element.name === "grid" ? "text-sm" : "text-xl"} ${
                index !== layoutOptions.length - 1 && "pr-2"
              }`}
              onClick={() => props.changeLayout(element.name)}
              key={index}
            >
              <abbr title={`${element.name} view`}>{element.icon}</abbr>
            </button>
          ))}
        </div>
      </section>
    </nav>
  );
};

export default FiltersBar;
