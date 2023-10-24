import style from "./langLevels.module.scss";

const LangLevels = ({ level }) => {
  return (
    <li className={style.langLevels}>
      <p className={style.langLevelsPara}>{level}</p>
    </li>
  );
};

export default LangLevels;
