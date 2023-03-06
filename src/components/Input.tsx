import React from "react";

type Props = {
  name: string;
  title: string;
  value: string | number;
  onChangeFunction: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => (
  <div className="flex flex-col p-4">
    <span className="mb-1 font-semibold text-secondaryBlue dark:text-primaryDarkModeBlue first-letter:uppercase">
      {props.title}
    </span>
    <input
      name={props.name}
      placeholder={props.title}
      className="py-1 border-[1px] dark:text-white placeholder:dark:text-secondaryGrey border-primaryGrey dark:border-primaryBlack bg-secondaryWhite dark:bg-secondaryBlack pl-2 outline-none focus:border-primaryBlue"
      onChange={(e) => props.onChangeFunction(e)}
      value={props.value}
    />
  </div>
);

export default Input;
