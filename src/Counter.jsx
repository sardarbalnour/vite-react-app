function Counter() {
  const increaseHandler = () => {
    console.log("first");
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
}

export default Counter;
