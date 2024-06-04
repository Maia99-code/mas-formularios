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
    <>
      <Forms
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
      />
    </>
  );
}
export default App;
