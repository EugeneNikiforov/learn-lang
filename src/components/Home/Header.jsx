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
        <div>
          <span>Log</span>
          <span>Registration</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
