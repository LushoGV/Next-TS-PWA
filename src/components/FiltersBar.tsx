import { useState } from "react";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { HiOutlineViewList } from "react-icons/hi";

type Props = {
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
    <nav className="max-w-7xl w-full mx-auto mb-2 flex flex-col-reverse lg:flex-row border-b-[1px] border-primaryGrey">
      <ul className="flex mx-auto w-full lg:w-auto lg:ml-0 text-sm">
        {tabOptions.map((element, index) => (
          <li
            key={index}
            onClick={() => setTabSelected(index)}
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
        <button className="mx-auto ml-0 lg:mr-8">BY DATE</button>

        {layoutOptions.map((element, index) => (
          <button
            className={`${
              props.layoutMode === element.name
                ? "text-primaryBlue"
                : "text-secondaryGrey"
            } ${element.name === "grid" ? "text-sm" : "text-xl"} pr-2`}
            onClick={() => props.changeLayout(element.name)}
            key={index}
          >
            <abbr title={`${element.name} view`}>{element.icon}</abbr>
          </button>
        ))}
      </section>
    </nav>
  );
};

export default FiltersBar;
