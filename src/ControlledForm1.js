import { useState } from "react";
import "./App.css";
function ControlledForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    course: "React",
  });
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
  });
  const handleOnChange = (e) => {
    if (e.target.value === "") {
      setError({...error,[e.target.name]:`${e.target.name} is required`})
    } else {
      setError({...error,[e.target.name]:''})
    }
  setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h2>Controlled Forms</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="form1">
        <div>
          <label>First Name : </label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={(e) => handleOnChange(e)}
          />{' '}
          <br />
          <span style={{ color: "red" }}>{error.firstname}</span>
        </div>
        <div>
          <label>Last Name : </label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={(e) => handleOnChange(e)}
          />{' '}
          <br />
          <span style={{ color: "red" }}>{error.lastname}</span>
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleOnChange(e)}
          />{' '}
          <br />
          <span style={{ color: "red" }}>{error.email}</span>
        </div>
        <div>
          <label>Gender :</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => handleOnChange(e)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => handleOnChange(e)}
          />
          Female
        </div>{' '}
          <br />
          <span style={{ color: "red" }}>{error.gender}</span>
        <div>
          <label>Courses : </label>
          <select name="course" onChange={(e) => handleOnChange(e)}>
            <option>React</option>
            <option>Node</option>
            <option>Java</option>
            <option>Mongo</option>
          </select>
        </div>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  );
}

export default ControlledForm;
