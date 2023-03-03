import { useModalContext } from "@/context/useModalContext";
import React from "react";
import { MdClose } from "react-icons/md";

type Props = {};

const Modal = (props: Props) => {
 const {modalContent} = useModalContext()
 
  return (
    <article className="fixed z-50 border-[1px] border-secondaryGrey bg-primaryWhite shadow-md">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Delete Task?</h1>
        
        <button className="border-primaryGrey text-secondaryGrey hover:text-primaryBlue text-2xl cursor-pointer">
        <MdClose className=""/>
        </button>
      </header>
      <section className="py-2 px-4">
        <p>if you delete this task, never come back</p>
      </section>
      <footer className="mt-1 p-4 flex justify-end">
        <button className=" border-[1px] border-secondaryGrey bg-red-500 text-white py-2 px-5 mr-2">Yes</button>
        <button className="border-[1px] border-secondaryGrey text-secondaryBlue py-2 px-5">No</button>
      </footer>
    </article>
  );
};

export default Modal;
