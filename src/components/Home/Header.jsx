import React from "react";
import Modal from "./ModalReg";
import style from "./header.module.scss";

const Header = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [balance, setBalance] = React.useState("");

  const valueChange = (e) => {
    const { value } = e.target;
    setBalance(value);
  };

  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerLogoContainer}>
          <span className={style.headerLogo}>LearnLingo</span>
        </div>
        <div className={style.headerMenu}>
          <span className={style.headerMenuHome}>Home</span>
          <span className={style.headerMenuTeachers}>Teachers</span>
        </div>
        <div className={style.headerBtns}>
          <span className={style.headerBtnsLogin}>Log in</span>
          <button type="button" className={style.headerBtnsReg}>
            Registration
          </button>
        </div>
      </div>
      <Modal active={showModal} setActive={setShowModal}>
        <form action="" className={style.headerForm}>
          <label>
            <p className={style.headerModalPara}>Balance:</p>
            <input
              className={style.headerModalInput}
              type="text"
              name="balance"
              value={balance}
              onChange={valueChange}
            />
          </label>
          <button className={style.headerModalBtn} type="submit">
            Confirm
          </button>
        </form>
      </Modal>
    </header>
  );
};

export default Header;
