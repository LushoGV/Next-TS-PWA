import CardModal from "./CardModal";
import Modal from "./Modal";
import { useModalContext } from "@/context/useModalContext";

const ModalSection = () => {
  const { modalState, changeModalState, cardModalState, changeCardModalState } = useModalContext();

  return (
    <section
      onClick={() =>
        (cardModalState && changeCardModalState()) ||
        (modalState && changeModalState())
      }
      className={`w-full h-screen  ${
        cardModalState || modalState
          ? "z-50 bg-black bg-opacity-25"
          : "z-10 bg-opacity-0"
      }  fixed top-0 flex items-center justify-center`}
    >
      {modalState && <Modal />}
      {cardModalState && <CardModal id={cardModalState} />}
    </section>
  );
};

export default ModalSection;
