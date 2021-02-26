import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { goToHome, goToSignUp } from "../Router/Coodinator";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // history.push("/feedPage");
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
      .post("https://localhost3003/user/login", body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // history.push("/feedPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Login</p>
      <input placeholder="E-mail" value={email} onChange={handleEmail} />
      <input placeholder="Senha" value={password} onChange={handlePassword} />
      <button onClick={login}>Fazer login</button>
      <button onClick={() => goToHome(history)}> Home</button>
      <button onClick={() => goToSignUp(history)}> Signup</button>
    </div>
  );
}
