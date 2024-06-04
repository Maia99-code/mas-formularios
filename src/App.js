import "./App.css";
import { useState } from "react";
import Forms from "./components/Forms";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <Forms
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
      />

      <div className="data--text">
        <h2>Your Form Data:</h2>
        <div>
          <p> <span>First Name: </span> {data.firstName}</p>
          <p> <span>Last Name:</span>  {data.lastName}</p>
          <p> <span>Email:</span> {data.email}</p>
          <p> <span>Password:</span> {data.password} </p>
          <p> <span>Confirm Password:</span> {data.confirmPassword}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
