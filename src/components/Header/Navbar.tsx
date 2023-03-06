import useTheme from "@/hooks/useTheme";
import {FiSun, FiMoon} from 'react-icons/fi'

const Navbar = () => {
  const {theme, handleThemeButton} = useTheme()

  return (
    <nav className="bg-secondaryBlue dark:bg-primaryBlack flex items-center justify-between lg:mb-5">
      <h1 className="bg-primaryBlue text-lg p-4 px-4 font-semibold text-primaryWhite">
        Tasks
      </h1>
      <button className="text-secondaryGrey text-xl mr-5 cursor-pointer hover:text-primaryBlue" onClick={handleThemeButton}>
        {theme === "dark" ? <FiSun/> : <FiMoon/>}
      </button>
    </nav>
  );
};

export default Navbar;
