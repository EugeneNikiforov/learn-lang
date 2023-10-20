import TeachersItem from "../TeachersItem/TeacherItem";

const Teachers = ({ teachers }) => {
  const teachersList = teachers.map((teacher) => (
    <TeachersItem teacher={teacher} key={teacher.name.toString()} />
  ));
  return (
    <section>
      <ul>{teachersList}</ul>
    </section>
  );
};

export default Teachers;
