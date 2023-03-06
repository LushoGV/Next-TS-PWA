import Form from "@/components/Form";
import Navbar from "@/components/Header/Navbar";
import { useTaskContext } from "@/context/useTaskContext";
import { iTask } from "@/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FormLayout = () => {
  const [cardContent, setCardContent] = useState<iTask>();
  const {tasks} = useTaskContext()
  const router = useRouter();

  const findCard = (id: string) => {
    const cardFinded = tasks.filter(
      (element) => element.id.toString() === id
    );

    setCardContent(cardFinded[0]);
  };

  useEffect(() => {
    router.query.id && findCard(router.query.id.toString());
  }, [router.query]);

  return (
    <>
      <header className="w-full sticky top-0 z-50"><Navbar /></header>
      <main className="flex w-full z-30 relative">
        <Form cardContent={cardContent} />
      </main>
    </>
  );
};

export default FormLayout;
