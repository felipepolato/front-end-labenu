import React from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from "../Router/Coodinator";
import axios from "axios";
import useForm from "../hoock/useForm";

export default function Signup() {
  const history = useHistory();
  const { form, onChange } = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "",
  });

  const conection = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      email: form.email,
      nickname: form.nickname,
      password: form.password,
    };

    axios
      .post("https://backend-fullstack-labenu.herokuapp.com/user/signup", body)
      .then((res) => {
        goToHome(history);
        localStorage.setItem("token", res.data.token);
      })
      .catch((error) => {
        alert("Cadastro falhou, tente novamente.");
        console.error(error);
      });
  };
  //

  return (
    <form onSubmit={conection}>
      
      <input
        onChange={onChange}
        value={form.name}
        name="name"
        placeholder="Nome"
        type="text"
      />

      <input
        onChange={onChange}
        value={form.nickname}
        name="nickname"
        placeholder="Nickname"
        type="text"
      />

      <input
        onChange={onChange}
        value={form.email}
        name="email"
        placeholder="E-mail"
        type="text"
      />

      <input
        onChange={onChange}
        value={form.password}
        name="password"
        placeholder="Senha"
        type="password"
      />
      <button onChange={onChange}> Cadastrar</button>
    </form>
  );
}
