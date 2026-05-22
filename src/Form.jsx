import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [gender, setGender] = useState("male");
  const [check, setCheck] = useState(false);

  const loginHandler = () => {
    console.log({ email, password, role, gender, check });
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const selectHandler = (event) => {
    setRole(event.target.value);
  };

  const genderHandler = (event) => {
    setGender(event.target.value);
  };

  const checkHandler = () => {
    setCheck((check) => !check);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email address : "
        value={email}
        onChange={emailHandler}
      />
      <input
        type="password"
        placeholder="Enter password : "
        value={password}
        onChange={passwordHandler}
      />
      <select value={role} onChange={selectHandler}>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="writer">Writer</option>
      </select>
      <div>
        {/* name of all radiobuttons are equal in order to user just can select one option */}
        <label htmlFor="male">Male</label>
        {/* id should be equal to htmlfor in order to when we click on the label the radiobutton be selected */}
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={genderHandler}
          checked={gender === "male"}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={genderHandler}
          checked={gender === "female"}
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          onChange={genderHandler}
          checked={gender === "other"}
        />
      </div>
      <input type="checkbox" checked={check} onChange={checkHandler} />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Form;
