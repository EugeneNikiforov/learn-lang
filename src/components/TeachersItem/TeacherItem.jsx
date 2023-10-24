import LangLevels from "./LangLevels/LangLevels";
import style from "./teachersItem.module.scss";

const TeachersItem = ({ teacher }) => {
  //   console.log(teacher);
  const {
    name,
    surname,
    lessons_done,
    rating,
    price_per_hour,
    languages,
    lesson_info,
    conditions,
  } = teacher;

  const langLevels = teacher.levels.map((level) => (
    <LangLevels level={level} key={level.toString()} />
  ));
  return (
    <li className={style.teachers}>
      <div>
        <img src="" alt="" />
      </div>
      <div className={style.teachersName}>
        <p className={style.teachersNameNote}>Languages</p>
        <p className={style.teachersNamePara}>
          {name} {surname}
        </p>
      </div>
      <div className={style.teachersInfo}>
        <ul className={style.teachersInfoList}>
          <li>
            <p className={style.teachersInfoPara}>Lessons online</p>
          </li>
          <li>
            <p className={style.teachersInfoPara}>
              Lessons done: {lessons_done}
            </p>
          </li>
          <li>
            <p className={style.teachersInfoPara}>Rating: {rating}</p>
          </li>
          <li>
            <p className={style.teachersInfoPara}>
              Price / 1 hour:
              <span className={style.teachersInfoCost}> {price_per_hour}$</span>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <button></button>
      </div>
      <div>
        <ul>
          <li>
            <span>Speaks:</span>
            <span> {languages}</span>
          </li>
          <li>
            <span>Lesson Info:</span>
            <span> {lesson_info}</span>
          </li>
          <li>
            <span>Conditions:</span>
            <span> {conditions}</span>
          </li>
        </ul>
      </div>
      <div>
        <span>Read more</span>
      </div>
      <div>
        <ul className={style.teachersLangLevels}>{langLevels}</ul>
      </div>
    </li>
  );
};

export default TeachersItem;
