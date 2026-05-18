import Header from "./Header";
import CourseList from "./CourseList";

export default function App() {
  const src = "igkgkyuuk";
  return (
    <div>
      <Header />
      <h1>Sardar the dev</h1>
      <CourseList />
      <p>react course</p>
      <img src={src} alt="" />
    </div>
  );
}
