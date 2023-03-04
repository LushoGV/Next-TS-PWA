import { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { iTask } from "@/interfaces";
import { useRouter } from "next/router";
import { useTaskContext } from "@/context/useTaskContext";

type Props = {
  cardContent?: iTask;
};

const initialInputContent = {
  id: 0,
  title: "",
  short_description: "",
  description: "",
  status: false,
  favorite: false,
  date: new Date(),
};

const Form = (props: Props) => {
  const [inputContent, setInputContent] = useState<iTask>(initialInputContent);
  const {addTask, updateTask} = useTaskContext()

  const router = useRouter();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent({ ...inputContent, [target.name]: target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.cardContent ? updateTask(inputContent) : addTask({ 
    title: inputContent.title,
    short_description: inputContent.short_description,
    description: inputContent.description,
    status: false,
    favorite: false,
    date: new Date()})
  
    router.push('/')
  };

  useEffect(() => {
    if (props.cardContent) {
      setInputContent({
        id: props.cardContent.id,
        title: props.cardContent.title,
        short_description: props.cardContent.short_description,
        description: props.cardContent.description,
        status: props.cardContent.status,
        favorite: props.cardContent.favorite,
        date: props.cardContent.date,
      });
    }
  }, [props.cardContent]);

  return (
    <form
      className="border-[1px] border-primaryGrey bg-primaryWhite w-full max-w-xl m-auto lg:mt-6"
      onSubmit={(e) => handleSubmit(e)}
    >
      <header className="p-4 flex items-center border-b-[1px] border-primaryGrey">
        <button
          className="mx-auto ml-0 border-[1px] border-primaryGrey p-3 text-sm text-primaryBlue"
          onClick={(e) =>{e.preventDefault(), router.push("/")}}
        >
          <SlArrowLeft />
        </button>
        <h1 className="font-semibold text-secondaryBlue text-xl mx-auto ml-0">
          {props.cardContent ? "Edit" : "Create"} Task
        </h1>
      </header>
      <section className="mx-4 pb-5 mt-1">
        <div className="flex flex-col p-4">
          <span className="mb-1 font-semibold text-secondaryBlue">Title</span>
          <input
            name="title"
            placeholder="title"
            className="py-1 border-[1px] border-primaryGrey bg-secondaryWhite pl-2 outline-none focus:border-primaryBlue"
            onChange={(e) => handleChange(e)}
            value={inputContent.title}
          />
        </div>
        <div className="flex flex-col p-4">
          <span className="mb-1 font-semibold text-secondaryBlue">
            Short description
          </span>
          <input
            name="short_description"
            placeholder="short description"
            className="py-1 border-[1px] border-primaryGrey bg-secondaryWhite pl-2 outline-none focus:border-primaryBlue"
            onChange={(e) => handleChange(e)}
            value={inputContent.short_description}
          />
        </div>
        <div className="flex flex-col p-4">
          <span className="mb-1 font-semibold text-secondaryBlue">
            Description
          </span>
          <input
            name="description"
            placeholder="description"
            className="py-1 border-[1px] border-primaryGrey bg-secondaryWhite pl-2 outline-none focus:border-primaryBlue"
            onChange={(e) => handleChange(e)}
            value={inputContent.description}
          />
        </div>
      </section>
      <footer className="flex p-4 mt-2 border-t-[1px] border-primaryGrey">
        <input
          disabled={
            !inputContent.title ||
            !inputContent.description ||
            !inputContent.short_description
          }
          value={"Submit"}
          type="submit"
          className="py-3 px-9 bg-primaryBlue text-white font-semibold mx-auto text-center border-[1px] border-primaryGrey hover:brightness-110 cursor-pointer disabled:brightness-75 disabled:cursor-not-allowed"
        />
      </footer>
    </form>
  );
};

export default Form;