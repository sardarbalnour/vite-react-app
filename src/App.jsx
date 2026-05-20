import Header from "./Header";
import CourseList from "./CourseList";
import Banner from "./Banner";
import Counter from "./Counter";

export default function App() {
  const src = "igkgkyuuk";
  return (
    <div>
      <Counter />
      <Header />
      <Banner title="developing" numOfStudents={300} />
      <h1>Sardar the dev</h1>
      <CourseList />
      <p>react course</p>
      <img src={src} alt="" />
    </div>
  );
}
