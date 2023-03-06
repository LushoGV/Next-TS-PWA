import { useModalContext } from "@/context/useModalContext";
import { MdClose } from "react-icons/md";

const Modal = () => {
  const { modalContent, changeModalState } = useModalContext();

  return (
    <article
      className="fixed z-50 border-[1px] border-secondaryGrey dark:border-primaryBlack bg-primaryWhite dark:bg-primaryBlack shadow-md max-w-xs w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold dark:text-primaryDarkModeBlue">{modalContent.title}</h1>

        <button
          className="border-primaryGrey text-secondaryGrey dark:text-secondaryGrey hover:text-primaryBlue text-2xl cursor-pointer"
          onClick={changeModalState}
        >
          <abbr title="Close">
          <MdClose className="" />
          </abbr>
        </button>
      </header>
      <section className="py-2 px-4 dark:text-secondaryGrey">
        {modalContent.description && <p>{modalContent.description}</p>}
      </section>
      <footer className="mt-1 p-4 flex justify-end">
        <button
          className=" border-[1px] border-secondaryGrey bg-red-500 text-white py-2 px-5 mr-2 hover:brightness-125 dark:border-primaryBlack"
          onClick={() => {
            modalContent.confirm.function(), changeModalState();
          }}
        >
          {modalContent.confirm.text}
        </button>
        <button
          className="border-[1px] border-secondaryGrey text-secondaryBlue dark:text-secondaryGrey py-2 px-5 hover:brightness-125 dark:border-primaryBlack"
          onClick={changeModalState}
        >
          {modalContent.cancel.text}
        </button>
      </footer>
    </article>
  );
};

export default Modal;
