import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import Navbar from "./Navbar";

type Props = {
  filtersBarState: boolean;
  changeFilters: (filterName: string, value: string) => void;
  changeFiltersBarState: () => void;
};

const Header = (props: Props) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    props.changeFilters("inputValue", target.value);
  };

  return (
    <>
      <Navbar />
      <section
        className={`flex flex-col lg:flex-row justify-between items-center max-w-7xl w-full mx-auto lg:pt-1 pb-2 lg:pb-5  ${
          !props.filtersBarState && "border-b-[1px] border-primaryGrey pb-8"
        }`}
      >
        <h1 className="text-4xl px-1 text-secondaryBlue mb-2 lg:mb-0">
          My Tasks
        </h1>

        <section className="flex w-full p-4 lg:w-auto lg:p-0">
          <div className="flex items-center border-[1px] w-full lg:w-auto border-primaryGrey bg-primaryWhite py-2 px-3">
            <BsSearch className="ml-1 mr-4 text-primaryBlue" />
            <input
              onChange={(e) => handleChange(e)}
              placeholder="Search"
              className="w-full lg:w-auto py-[2px] lg:pr-8 bg-primaryWhite text-secondaryGrey outline-none"
            />
          </div>
          <button
            className="ml-4 bg-primaryWhite border-[1px] border-primaryGrey px-3"
            onClick={props.changeFiltersBarState}
          >
            <abbr title="Filters bar">
              <CgMenuGridR className="text-2xl text-secondaryGrey" />
            </abbr>
          </button>
        </section>
      </section>
    </>
  );
};

export default Header;
