import { useState } from "react";
import Tooltip from "./Modal";

function ModalParent() {
  const [ModalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <p>Home Component</p>
      <button onClick={openModal}>Open Modal</button>
      <Tooltip
        openModal={ModalVisible}
        closeModal={closeModal}
        overlayClick={true}
        size="md"
      />
    </div>
  );
}

export default ModalParent;
