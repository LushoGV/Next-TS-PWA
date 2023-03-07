import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

interface iSortOption {
  text: string;
  value: number;
}

type Props = {
  changeFilters: (filterName: string, value: string | number) => void;
};

const sortOptions = [
  { text: "A-Z", value: 0 },
  { text: "Z-A", value: 1 },
  { text: "date", value: 2 },
];

const SortButton = (props: Props) => {
  const [sortMenuState, setSortMenuState] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<iSortOption>({
    text: "date",
    value: 2,
  });

  const changeSelectedOption = (newValues: iSortOption) => {
    setSelectedOption(newValues);
    props.changeFilters("orderBy", newValues.value);
  };

  return (
    <div className="mx-auto ml-0 lg:mr-8 flex justify-center relative">
      <button
        className={`text-secondaryGrey z-30 lg:px-4 flex items-center justify-between font-semibold uppercase`}
        onClick={() => setSortMenuState(!sortMenuState)}
      >
        by {selectedOption.text}
        <SlArrowDown className="text-sm ml-3 mt-[1px]" />
      </button>

      {sortMenuState && (
        <div className="absolute top-0 mt-[28px] lg:mt-[42px] border-[1px] border-primaryGrey dark:border-primaryBlack bg-primaryWhite dark:bg-primaryBlack shadow-md">
          <ul>
            {sortOptions.map((element, index) => (
              <li
                onClick={() => changeSelectedOption(element)}
                key={index}
                className={`px-4 mx-3 py-[5px] first-letter:uppercase ${
                  selectedOption.value === element.value
                    ? "text-primaryBlue"
                    : "text-secondaryGrey"
                } ${
                  index !== sortOptions.length - 1 && "border-b-[1px]"
                } border-primaryGrey dark:border-primaryBlack hover:text-primaryBlue cursor-pointer`}
              >
                {element.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortButton;
