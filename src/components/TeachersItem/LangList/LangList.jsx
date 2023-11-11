import style from "./LangList.module.scss";

const LangList = ({ language }) => {
  return (
    <li className={style.langList}>
      <p className={style.langListPara}>{language}</p>
    </li>
  );
};

export default LangList;
