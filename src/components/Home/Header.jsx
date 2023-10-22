import style from "./header.module.scss";

const Header = () => {
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
    </header>
  );
};

export default Header;
