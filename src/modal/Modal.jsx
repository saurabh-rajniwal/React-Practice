import { useEffect } from "react";
import "./Modal.css";

// eslint-disable-next-line react/prop-types
function Tooltip({ openModal, closeModal, overlayClick, size }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!openModal) {
    return null;
  }

  const closeDialog = () => {
    closeModal(false);
  };

  const handleOverlayClick = () => {
    if (overlayClick) {
      closeDialog();
    }
  };

  const handleDialogClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <h1>Model Example</h1>
      <div className="model-overlay" onClick={handleOverlayClick}>
        <div className={`model-${size}`} onClick={handleDialogClick}>
          <h2 tabIndex={1}>This is model heading</h2>
          <p tabIndex={1}>This is model body</p>
          <button tabIndex={1} onClick={closeDialog}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Tooltip;
