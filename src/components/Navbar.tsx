import { FaRegUser } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full bg-secondaryBlue flex items-center justify-between mb-5">
      <h1 className="bg-primaryBlue text-lg p-4 px-4 font-semibold text-primaryWhite">
        Tasks
      </h1>
      <FaRegUser className="text-secondaryGrey mr-5 cursor-pointer hover:text-primaryBlue" />
    </nav>
  );
};

export default Navbar;
