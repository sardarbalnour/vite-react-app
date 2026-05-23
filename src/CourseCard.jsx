function CourseCard({ data: { name, description } }) {
  return (
    <li>
      <h4 style={{ color: "red", fontSize: "3rem", backgroundColor: "silver" }}>
        {name}
      </h4>
      <p>{description}</p>
    </li>
  );
}

export default CourseCard;
