import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { login } from "../store/user.slice";

const Login = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const styleInput = {
    borderStyle: "none",
    width: "95%",
    borderRadius: "5px",
    height: "10px",
    border: error ? "1px solid red" : "none",
    backgroundColor: "#D5CABD",
    fontSize: "1.2rem",
    color: "#643459",
  };
  const nameOnChange = (e) => {
    const name = e.target.value;
    setInputValue((prevState) => ({
      ...prevState,
      name,
    }));
  };

  const emailOnChange = (e) => {
    const email = e.target.value;
    setInputValue((prevState) => ({
      ...prevState,
      email,
    }));
  };

  const passwordOnChange = (e) => {
    const password = e.target.value;
    setInputValue((prevState) => ({
      ...prevState,
      password,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputValue.name === undefined ||
      inputValue.email === undefined ||
      inputValue.password === undefined 
    ) {
      setError("Please fill in all the fields correctly!");
    } else if (inputValue.name.length <= 2) {
      setName("The name cannot be shorter than 2 letters");
    } else if (!inputValue.email.includes("@")) 
      setEmail("Incorrectly filled in the field!");
      else if(inputValue.password.length <= 5){
        setError("The password must be at least 6 characters long");
    } else {
      setError("");
      setEmail("");
      setError("")
      
      dispatch(
        login({
          name: inputValue.name,
          email: inputValue.email,
          password: inputValue.password,
          isAuthorization: true,
        })
      );
    }
  };

  return (
    <LoginStyle>
      <LoginForm autoComplete="on" onSubmit={handleSubmit}>
        <LoginTextTitle>Login Here</LoginTextTitle>
        <DivForm>
          <InputForm
            type="name"
            placeholder="name"
            onError={error}
            value={inputValue.name || ""}
            onChange={nameOnChange}
            style={styleInput}
          />
          {name && <p>{name}</p>}
          <input
            // onError={error}
            type="email"
            placeholder="email"
            value={inputValue.email || ""}
            onChange={emailOnChange}
            style={styleInput}
          />
          {email && <p>{email}</p>}
          <input
            type="password"
            placeholder="password"
            error={error}
            value={inputValue.password}
            onChange={passwordOnChange || ""}
            style={styleInput}
          />
        </DivForm>

        <SubmitButton type="submit">Submit</SubmitButton>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </LoginForm>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 40%;
  height: 56vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 20px;
  &:hover {
    background-color: rgb(2, 5, 0, 0.59);
  }
  h1 {
    font-size: 35px;
    margin-bottom: 15px;
    padding-bottom: 10px;
    letter-spacing: -1px;
  }
  input {
    min-width: 380px;
    padding: 20px 0;
    padding-left: 15px;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid black;
    border-radius: 2px;
    font-size: 15px;
  }
`;
const SubmitButton = styled.button`
  width: 83.3%;
  padding: 17px 30px;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin-top: 10px;
  background-color: #37515f;
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    letter-spacing: 11px;
    background-color: purple;
    border-radius: 11px;
  }
`;

const LoginTextTitle = styled.h1`
  text-transform: uppercase;
  color: bisque;
`;

const InputForm = styled.input`
  border: none;
  border-radius: 20px;
`;

const DivForm = styled.div`
  gap: 15px;
  height: 230px;
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Login;
