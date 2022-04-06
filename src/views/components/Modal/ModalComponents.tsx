import React from "react";
import Modal from "react-modal";
import { useAppDispatch } from "../../../app/hooks";
import { setIsModalopen } from "../../../app/modalSlice";
import styles from "./ModalComponents.module.scss";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type Props = {
  isModalOpen: boolean;
};

const ModalComponents: React.FC<Props> = ({ isModalOpen }) => {
  const dispatch = useAppDispatch();
  const onCloseButtonClick = () => {
    dispatch(setIsModalopen(false));
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseButtonClick}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      <div>送信しました。</div>
      <div>お問い合わせありがとうございます。</div>
    </Modal>
  );
};

export default ModalComponents;
