import React from "react";
import Modal from "./ModalReg";
import style from "./header.module.scss";
import { Link } from "react-router-dom";

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
          <Link className={style.headerLogo}>LearnLingo</Link>
        </div>
        <div className={style.headerMenu}>
          <Link className={style.headerMenuHome}>Home</Link>
          <Link className={style.headerMenuTeachers}>Teachers</Link>
        </div>
        <div className={style.headerBtns}>
          <Link className={style.headerBtnsLogin}>Log in</Link>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className={style.headerBtnsReg}
          >
            Registration
          </button>
        </div>
      </div>
      <Modal active={showModal} setActive={setShowModal}>
        <div className={style.headerFormContainer}>
          <p className={style.headerModalReg}>Registration</p>
          <p className={style.headerModalPara}>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
          <form action="" className={style.headerForm}>
            <label>
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
        </div>
      </Modal>
    </header>
  );
};

export default Header;
