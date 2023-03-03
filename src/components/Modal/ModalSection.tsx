import CardModal from "./CardModal";
import Modal from "./Modal";
import { useModalContext } from "@/context/useModalContext";

type Props = {};

const ModalSection = (props: Props) => {
  const { modalState, cardModalState, changeCardModalState } = useModalContext();

  return (
    <section
      onClick={() => cardModalState && changeCardModalState()}
      className={`w-full h-screen  ${
        cardModalState || modalState
          ? "z-50 bg-opacity-25"
          : "z-30 bg-opacity-0"
      } bg-black bg-opacity-25 fixed top-0 flex items-center justify-center`}
    >
      {modalState && <Modal />}
      {cardModalState && <CardModal id={cardModalState} />}
    </section>
  );
};

export default ModalSection;
