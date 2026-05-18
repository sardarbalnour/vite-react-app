import Test from "../test";
import Header from "./Header";

export default function App() {
  const src = "igkgkyuuk";
  return (
    <div>
      <Header />
      <h1>Sardar the dev</h1>
      <p>react course</p>
      <img src={src} alt="" />
      <Test />
    </div>
  );
}
