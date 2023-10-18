import teachers from "../../data/teachers.json";

const Teachers = () => {
  const teachersList = teachers.map((teacher) => (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>Languages</p>
        <p></p>
      </div>
      <div>
        <ul>
          <li>
            <span>Lessons online</span>
            <span></span>
          </li>
          <li>
            <span>Lessons done:</span>
            <span></span>
          </li>
          <li>
            <span>Rating:</span>
            <span></span>
          </li>
          <li>
            <span>Price / 1 hour:</span>
            <span></span>
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
            <span></span>
          </li>
          <li>
            <span>Lesson Info:</span>
            <span></span>
          </li>
          <li>
            <span>Conditions:</span>
            <span></span>
          </li>
        </ul>
      </div>
      <div>
        <span>Read more</span>
      </div>
      <div>
        <ul>
          <li>
            <a href="">#A1 Beginner</a>
          </li>
          <li>
            <a href="">#A2 Elementary</a>
          </li>
          <li>
            <a href="">#B1 Intermediate</a>
          </li>
          <li>
            <a href="">#B2 Upper-Intermediate</a>
          </li>
        </ul>
      </div>
    </div>
  ));
};

export default Teachers;
