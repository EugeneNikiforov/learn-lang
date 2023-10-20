import TeachersItem from "../TeachersItem/TeacherItem";

const Teachers = ({ teachers }) => {
  const teachersList = teachers.map((teacher) => (
    <TeachersItem teacher={teacher} key={teacher.name.toString()} />
  ));
  return <ul>{teachersList}</ul>;
};

export default Teachers;
