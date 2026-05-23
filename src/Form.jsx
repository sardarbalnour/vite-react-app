import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user",
    gender: "male",
    check: false,
  });

  const loginHandler = () => {
    console.log(form);
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "check") {
      setForm((form) => ({ ...form, check: !form.check }));
    } else {
      setForm((form) => ({ ...form, [name]: value }));
    }
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address : "
        value={form.email}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password : "
        value={form.password}
        onChange={changeHandler}
      />
      <select value={form.role} name="role" onChange={changeHandler}>
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
          onChange={changeHandler}
          checked={form.gender === "male"}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={changeHandler}
          checked={form.gender === "female"}
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          onChange={changeHandler}
          checked={form.gender === "other"}
        />
      </div>
      <input
        type="checkbox"
        name="check"
        checked={form.check}
        onChange={changeHandler}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Form;
