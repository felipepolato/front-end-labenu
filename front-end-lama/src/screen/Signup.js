import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import goToSignUp from "../Router/Coodinator";
import axios from "axios";
import useForm from "../hoock/useForm";
import Login from "./Login";

export default function Signup() {
  const history = useHistory();
  const [form, onChange] = useForm({
    name: "",
    nickname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/");
    }
  }, [history]);

  const handleSignup = async (event) => {
    event.preventDefault();
  };
  const signup = () => {
    const body = {
      name: form.nome,
      email: form.email,
      nickname: form.nickname,
      password: form.senha,
    };

    axios
      .post("https://localhost3003/user/signup", body)
      .then((res) => {
        console.log("RESPONSE", res);
        localStorage.setItem("token", res.data.token);
        //   history.push("/signup/address");
      })
      .catch((error) => {
        alert("Cadastro falhou, tente novamente.");
        console.error(error);
      });
  };
  //  

  return (
    <div>
      <p>Signup</p>
      <input placeholder="Nome" type="text" />
      <input placeholder="Nickname" type="text" />
      <input placeholder="E-mail" type="text" />
      <input placeholder="Senha" type="password" />
      <button  onChange={onChange} onClick={Login}> Cadastrar</button>
    </div>
  );
}
