import LangLevels from "./LangLevels/LangLevels";
// import LangList from "./LangList/LangList";
import onlineIcon from "../../assets/icons/isOnline.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import style from "./teachersItem.module.scss";

const TeachersItem = ({ teacher }) => {
  // console.log(teacher.avatar_url);
  const {
    name,
    surname,
    lessons_done,
    rating,
    price_per_hour,
    languages,
    lesson_info,
    conditions,
    avatar_url,
  } = teacher;

  // const langList = languages.map((language) => (
  //   <LangList language={language} key={language.toString()} />
  // ));

  const langLevels = teacher.levels.map((level) => (
    <LangLevels level={level} key={level.toString()} />
  ));
  return (
    <li className={style.teachers}>
      <div className={style.teachersPicContainer}>
        <img src={avatar_url} alt="teacher-pic" className={style.teachersPic} />
        <img src={onlineIcon} alt="online-pic" className={style.teachersIcon} />
      </div>
      <div className={style.teachersBlocks}>
        <div className={style.teachersInfo}>
          <div className={style.teachersName}>
            <p className={style.teachersNameNote}>Languages</p>
            <p className={style.teachersNamePara}>
              {name} {surname}
            </p>
          </div>
          <ul className={style.teachersInfoList}>
            <li className={style.teachersInfoItemOnline}>
              <p className={style.teachersInfoParaOnline}>Lessons online</p>
            </li>
            <li className={style.teachersInfoItemLessons}>
              <p className={style.teachersInfoParaLessons}>
                Lessons done: {lessons_done}
              </p>
            </li>
            <li className={style.teachersInfoItemRating}>
              <p className={style.teachersInfoParaRating}>Rating: {rating}</p>
            </li>
            <li>
              <p className={style.teachersInfoPara}>
                Price / 1 hour:
                <span className={style.teachersInfoCost}>
                  {" "}
                  {price_per_hour}$
                </span>
              </p>
            </li>
          </ul>
          <button type="button" className={style.teachersInfoBtn}>
            <Heart
              className={style.teachersInfoBtnPic}
              width={26}
              height={26}
            />
          </button>
        </div>

        <div className={style.teachersDesc}>
          <ul className={style.teachersDescList}>
            <li className={style.teachersDescListItem}>
              <p className={style.teachersDescPara}>
                Speaks:
                <span className={style.teachersDescLang}>
                  {" "}
                  {languages.join(", ")}
                </span>
              </p>
            </li>
            <li className={style.teachersDescListItem}>
              <p className={style.teachersDescPara}>
                Lesson Info:
                <span className={style.teachersDescSpan}> {lesson_info}</span>
              </p>
            </li>
            <li className={style.teachersDescListItem}>
              <p className={style.teachersDescPara}>
                Conditions:
                <span className={style.teachersDescSpan}> {conditions}</span>
              </p>
            </li>
          </ul>
        </div>
        <div className={style.teachersLink}>
          <p className={style.teachersLinkPara}>Read more</p>
        </div>
        <div className={style.teachersLang}>
          <ul className={style.teachersLangLevels}>{langLevels}</ul>
        </div>
      </div>
    </li>
  );
};

export default TeachersItem;
