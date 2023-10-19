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
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>Languages</p>
        <p>
          {name} {surname}
        </p>
      </div>
      <div>
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
        <ul>
          <li>
            <span>#A1 Beginner</span>
          </li>
          <li>
            <span>#A2 Elementary</span>
          </li>
          <li>
            <span>#B1 Intermediate</span>
          </li>
          <li>
            <span>#B2 Upper-Intermediate</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeachersItem;
