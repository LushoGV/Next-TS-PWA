import { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { iTask } from "@/interfaces";
import { useRouter } from "next/router";
import { useTaskContext } from "@/context/useTaskContext";
import Input from "./Input";

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

  const inputsArr = [{
    title:"title",
    name:"title",
    value: inputContent.title,
  },{
    title:"short description",
    name:"short_description",
    value: inputContent.short_description,
  },{
    title:"description",
    name:"description",
    value: inputContent.description,
  }]


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
      className="border-[1px] border-primaryGrey dark:border-primaryBlack bg-primaryWhite dark:bg-primaryBlack w-full max-w-xl m-auto lg:mt-6"
      onSubmit={(e) => handleSubmit(e)}
    >
      <header className="p-4 flex items-center border-b-[1px] border-primaryGrey dark:border-primaryBlack mr-5">
        <button
          className="mx-auto ml-0 border-[1px] border-primaryGrey dark:border-primaryBlack p-3 text-sm text-primaryBlue"
          onClick={(e) =>{e.preventDefault(), router.push("/")}}
        >
          <SlArrowLeft />
        </button>
        <h1 className="font-semibold text-secondaryBlue dark:text-primaryDarkModeBlue text-xl mx-auto ml-0">
          {props.cardContent ? "Edit" : "Create"} Task
        </h1>
      </header>
      <section className="mx-4 pb-5 mt-1">
        {
          inputsArr.map((element, index) => (
            <Input key={index} title={element.title} name={element.name} value={element.value} onChangeFunction={handleChange}/>
          ))
        }
       </section>
      <footer className="flex p-4 mt-2 border-t-[1px] border-primaryGrey dark:border-primaryBlack">
        <input
          disabled={
            !inputContent.title ||
            !inputContent.description ||
            !inputContent.short_description
          }
          value={"Submit"}
          type="submit"
          className="py-3 px-9 bg-primaryBlue text-white font-semibold mx-auto text-center border-[1px] border-primaryGrey dark:border-primaryBlack hover:brightness-110 cursor-pointer disabled:brightness-75 disabled:cursor-not-allowed"
        />
      </footer>
    </form>
  );
};

export default Form;