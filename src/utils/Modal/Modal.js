import "./Modal.scss";

export const Modal = ({ show, children }) => {
  return (
    <>
      {show && (
        <div className="ModalBG" onKeyDown={() => {}}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`Modal__body`}
            onKeyDown={() => {}}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
