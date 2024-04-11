/** @format */

const Modal = ({ children, isModal, setIsModal }) => {
  return (
    <>
      {isModal && (
        <div
          onClick={() => setIsModal(false)}
          className="bg-overlay fixed inset-0 flex items-center justify-center  z-[99] w-full "
        >
          <div
            className="min-w-[50%] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
