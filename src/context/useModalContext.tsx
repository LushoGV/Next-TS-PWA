import { createContext, useContext, useState } from "react";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}
interface context {
  modalState: boolean;
  modalContent: iModalContent;
  changeModalState: () => void;
  changeModalContent: (params: iModalContent) => void;
  cardModalState: boolean | string;
  changeCardModalState: (id?:string) => void;
}
interface iModalContent {
  title: string;
  description: string | null;
  confirm: { text: string; function: () => void };
  cancel: { text: string; function?: () => void };
}

const ModalContext = createContext<context>({} as context);

export const ModalProvider = ({ children }: ProviderProps) => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<iModalContent>({
    title: "",
    description: "",
    confirm: {
      text: "",
      function: () => {},
    },
    cancel: {
      text: "",
      function: () => {},
    },
  });
  const [cardModalState, seCardModalState] = useState<boolean | string>(false);

  const changeModalState = () => setModalState(!modalState);

  const changeModalContent = (params: iModalContent) => {
    setModalContent({
      title: params.title,
      description: params.description,
      confirm: {
        text: params.confirm.text,
        function: params.confirm.function,
      },
      cancel: {
        text: params.confirm.text,
        function: params.confirm.function,
      },
    });
  };

  const changeCardModalState = (id?:string) => id ? seCardModalState(id) : seCardModalState(false);

  return (
    <ModalContext.Provider
      value={{ modalState, modalContent, changeModalState, changeModalContent, cardModalState, changeCardModalState }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const { modalState, modalContent, changeModalState, changeModalContent, cardModalState, changeCardModalState } = useContext(ModalContext);
  return { modalState, modalContent, changeModalState, changeModalContent, cardModalState, changeCardModalState };
};
