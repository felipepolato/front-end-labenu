import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
}

const goToHome = () => {
  history.push("/home");
};

useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    history.push("/feedPage");
  }
}, [history]);

const handleEmail = (e) => {
  setEmail(e.target.value);
};

const handlePassword = (e) => {
  setPassword(e.target.value);
};

const login = () => {
  const body = {
    email,
    password,
  };

  axios
    .post("", body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      history.push("/feedPage");
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <p>Login</p>
      <input value={email} onChange={handleEmail} />
      <input value={password} onChange={handlePassword} />
      <button onClick={login}>Fazer login</button>

      <button onClick={goToHome}> Home</button>
    </div>
  );
};
