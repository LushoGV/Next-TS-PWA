import { createContext, useContext, useState } from "react";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}
interface context {
  modalState: boolean;
  changeModalState: () => void;
  changeModalContent: (params: iModalContent) => void;
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

  return (
    <ModalContext.Provider
      value={{ modalState, changeModalState, changeModalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalProvider = () => {
  const { modalState, changeModalState, changeModalContent } = useContext(ModalContext);
  return { modalState, changeModalState, changeModalContent };
};
