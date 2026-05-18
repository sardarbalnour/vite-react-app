function CourseList() {
  const courses = ["react", "js", "css", "html"];
  return (
    <>
      <h3>CourseList</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </>
  );
}

export default CourseList;

// list rendering
