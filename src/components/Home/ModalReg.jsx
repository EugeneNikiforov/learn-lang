import "./BalanceModal.css";

const Modal = ({ children, active, setActive }) => {
  return (
    <div className={active ? "overlay active" : "overlay"} onClick={() => {}}>
      <div className={active ? "modal active" : "modal"} onClick={() => {}}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
