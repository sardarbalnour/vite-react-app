import CourseCard from "./CourseCard";

function CourseList() {
  const courses = [
    { id: 1, name: "react", description: "this is react course" },
    { id: 2, name: "js", description: "this is js course" },
    { id: 3, name: "css", description: "this is css course" },
    { id: 4, name: "next", description: "this is next course" },
  ];
  return (
    <>
      <h3>CourseList</h3>
      <ul>
        {courses.map((course) => (
          <CourseCard key={course.id} data={course}/>
        ))}
      </ul>
    </>
  );
}

export default CourseList;

// list rendering
