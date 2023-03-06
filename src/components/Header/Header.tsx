import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import CreateTaskButton from "../CreateTaskButton";
import Navbar from "./Navbar";

type Props = {
  filtersBarState: boolean;
  changeFilters: (filterName: string, value: string) => void;
  changeFiltersBarState: () => void;
};

const Header = (props: Props) => {
  const [inputContent, setInputContent] = useState<string>("");

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(target.value);
    props.changeFilters("inputValue", target.value);
  };

  return (
    <>
      <Navbar />
      <section
        className={`flex flex-col lg:flex-row justify-between items-center max-w-7xl w-full mx-auto mt-5 lg:pt-1 lg:px-4 pb-4 lg:pb-6 ${
          !props.filtersBarState && "border-b-[1px] border-primaryGrey dark:border-primaryBlack"
        }`}
      >
        <h1 className="text-3xl lg:text-4xl px-1 text-secondaryBlue dark:text-primaryDarkModeBlue mb-2 lg:mb-0">
          My Tasks
        </h1>

        <section className="flex w-full p-4 lg:w-auto lg:p-0">
          <div className="flex items-center border-[1px] w-full lg:w-auto border-primaryGrey dark:border-primaryBlack bg-primaryWhite dark:bg-primaryBlack py-2 px-3">
            <BsSearch className="ml-1 mr-4 text-primaryBlue" />
            <input
              value={inputContent}
              onChange={(e) => handleChange(e)}
              placeholder="Search"
              className="w-full lg:w-auto py-[2px] lg:pr-8 bg-primaryWhite dark:bg-primaryBlack text-secondaryGrey outline-none"
            />
          </div>
          <button
            className="ml-4 lg:ml-3 bg-primaryWhite dark:bg-primaryBlack border-[1px] border-primaryGrey dark:border-primaryBlack px-3"
            onClick={props.changeFiltersBarState}
          >
            <abbr title="Filters bar">
              <CgMenuGridR className="text-2xl text-secondaryGrey" />
            </abbr>
          </button>

          <CreateTaskButton />
        </section>
      </section>
    </>
  );
};

export default Header;
