import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import FormInput from "../../components/FormInput";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phoneNumber: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      label: "Your email address",
      type: "email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 2,
      name: "password",
      label: "Your password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at list 1 letter, 1 number and 1 special character!",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      label: "Confirm your password",
      type: "password",
      errorMessage: "Password don't match!",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: "fullName",
      label: "Your full name",
      type: "text",
      errorMessage: "Enter your full name!",
      required: true,
    },
    {
      id: 5,
      name: "phoneNumber",
      label: "Your phone number",
      type: "text",
      errorMessage: "Enter your valid phone number",
      pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,14}$",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="regSection">
        <div className="regSection__bg">
          <div className="regSection__bg--text">
            <h2>Choose a data range</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ratione harum velit
              delectus error dolores non neque fugiat at ut.
            </p>
          </div>
        </div>
        <div className="regSection__form">
          <form onSubmit={handleSubmit}>
            <h2>Create an account</h2>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="regSection__form--checkbox">
              <input type="checkbox" required />
              <span> I read and agree Terms and Conditios</span>
            </div>
            <button>Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
