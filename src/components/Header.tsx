import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import FiltersBar from "./FiltersBar";

type Props = {
  changeLayout: React.Dispatch<React.SetStateAction<string>>;
  layoutMode: string;
};

const Header = (props: Props) => {
  const [filtersBarState, setFiltersBarState] = useState<boolean>(true);

  return (
    <>
      <header
        className={`flex flex-col lg:flex-row justify-between items-center max-w-7xl w-full mx-auto lg:pt-1 pb-2 lg:pb-5  ${
          !filtersBarState && "border-b-[1px] border-primaryGrey pb-8"
        }`}
      >
        <h1 className="text-4xl px-1 text-secondaryBlue mb-2 lg:mb-0">
          My Tasks
        </h1>

        <section className="flex w-full p-4 lg:w-auto lg:p-0">
          <div className="flex items-center border-[1px] w-full lg:w-auto border-primaryGrey bg-primaryWhite py-2 px-3">
            <BsSearch className="ml-1 mr-4 text-primaryBlue" />
            <input
              placeholder="Search"
              className="w-full lg:w-auto py-[2px] lg:pr-8 bg-primaryWhite text-secondaryGrey outline-none"
            />
          </div>
          <button
            className="ml-4 bg-primaryWhite border-[1px] border-primaryGrey px-3"
            onClick={() => setFiltersBarState(!filtersBarState)}
          >
            <abbr title="Filters bar">
              <CgMenuGridR className="text-2xl text-secondaryGrey" />
            </abbr>
          </button>
        </section>
      </header>
      {filtersBarState && (
        <FiltersBar
          changeLayout={props.changeLayout}
          layoutMode={props.layoutMode}
        />
      )}
    </>
  );
};

export default Header;
