import TeachersItem from "../TeachersItem/TeacherItem";
import style from "./teachers.module.scss";

const Teachers = ({ teachers }) => {
  const teachersList = teachers.map((teacher) => (
    <TeachersItem teacher={teacher} key={teacher.name.toString()} />
  ));
  return (
    <section>
      <ul className={style.teachers}>{teachersList}</ul>
    </section>
  );
};

export default Teachers;
