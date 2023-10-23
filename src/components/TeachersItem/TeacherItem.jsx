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
        <p>Languages</p>
        <p>
          {name} {surname}
        </p>
      </div>
      <div className={style.teachersInfo}>
        <ul>
          <li>
            <span>Lessons online</span>
            <span></span>
          </li>
          <li>
            <span>Lessons done:</span>
            <span> {lessons_done}</span>
          </li>
          <li>
            <span>Rating:</span>
            <span> {rating}</span>
          </li>
          <li>
            <span>Price / 1 hour:</span>
            <span> {price_per_hour}$</span>
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
        <ul>{langLevels}</ul>
      </div>
    </li>
  );
};

export default TeachersItem;
