import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { HiOutlineViewList } from "react-icons/hi";

type Props = {};

const tabOptions = ["all", "pending", "completed"];

const Header = (props: Props) => {
  const [filtersBarState, setFiltersBarState] = useState<boolean>(true);
  const [tabSelected, setTabSelected] = useState<number>(0);
  const [gridMode, setGridMode] = useState<string>("grid");

  return (
    <>
      <header
        className={`flex justify-between items-center max-w-7xl w-full mx-auto pt-8 pb-5 ${
          !filtersBarState && "border-b-[1px] border-primaryGrey pb-8"
        }`}
      >
        <h1 className="text-4xl px-1">My Tasks</h1>

        <section className="flex">
          <div className="flex items-center border-[1px] border-primaryGrey bg-primaryWhite py-2 px-3">
            <BsSearch className="ml-1 mr-4 text-primaryBlue" />
            <input
              placeholder="Search"
              className="py-[2px] pr-8 bg-primaryWhite text-secondaryGrey outline-none"
            />
          </div>
          <button
            className="ml-4 bg-primaryWhite border-[1px] border-primaryGrey px-3"
            onClick={() => setFiltersBarState(!filtersBarState)}
          >
            <CgMenuGridR className="text-2xl text-secondaryGrey" />
          </button>
        </section>
      </header>
      {filtersBarState && (
        <nav className="max-w-7xl w-full mx-auto flex border-b-[1px] border-primaryGrey">
          <ul className="flex mx-auto ml-0">
            {tabOptions.map((element, index) => (
              <li
                key={index}
                onClick={() => setTabSelected(index)}
                className={`${
                  tabSelected === index
                    ? "border-b-[2px] border-primaryBlue text-primaryBlue"
                    : "text-secondaryGrey"
                } px-4 mr-2 py-[10px] uppercase cursor-pointer`}
              >
                {element}
              </li>
            ))}
          </ul>

          <section className="flex">
            <button className="mr-8">BY DATE</button>

            <button className="pr-4" onClick={() => setGridMode("grid")}>
              <TfiLayoutGrid2Alt
                className={`${
                  gridMode === "grid"
                    ? "text-primaryBlue"
                    : "text-secondaryGrey"
                } text-sm`}
              />
            </button>
            <button className="pr-2" onClick={() => setGridMode("list")}>
              <HiOutlineViewList
                className={`${
                  gridMode === "list"
                    ? "text-primaryBlue"
                    : "text-secondaryGrey"
                } text-xl`}
              />
            </button>
          </section>
        </nav>
      )}
    </>
  );
};

export default Header;
