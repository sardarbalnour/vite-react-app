function Banner({title,numOfStudents}) {
  return (
    <div>
      <hr />
      <h2>Banner</h2>
      <h3>{title}</h3>
      <span>{numOfStudents} Students</span>
      <hr />
    </div>
  );
}

export default Banner;

// props