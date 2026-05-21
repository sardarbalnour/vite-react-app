function Form() {
  const loginHandler = (event) => {
    console.log(event.target.innerText)
    console.log("first")
  };

  return (
    <div>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Form;
