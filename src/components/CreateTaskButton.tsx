import { useRouter } from "next/router";
import { MdAdd } from "react-icons/md";

type Props = {
  mobileMode?: boolean;
};

const CreateTaskButton = (props: Props) => {
  const router = useRouter();

  if (props.mobileMode)
    return (
      <button
        className="lg:hidden mt-2 my-5 border-[1px] border-primaryGrey dark:border-primaryBlack bg-primaryBlue p-4 rounded-full shadow-md"
        onClick={() => router.push("/tasks/new")}
      >
        <span className="text-primaryWhite text-3xl">
          <abbr title="Create task">
            <MdAdd />
          </abbr>
        </span>
      </button>
    );

  return (
    <button
      className="hidden lg:flex items-center border-[1px] border-primaryGrey dark:border-primaryBlack bg-primaryBlue px-3 shadow-md ml-3"
      onClick={() => router.push("/tasks/new")}
    >
      <span className="text-primaryWhite font-semibold flex items-center justify-center">
        Create Task
        <abbr title="Create task">
          <MdAdd className="text-2xl ml-2" />
        </abbr>
      </span>
    </button>
  );
};

export default CreateTaskButton;
