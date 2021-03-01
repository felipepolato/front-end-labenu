import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { goToHome } from "../Router/Coodinator";
import useForm from "../hoock/useForm";

export default function Login() {
  const { form, onChange } = useForm({
    nickname: "",
    password: "",
  });

  const history = useHistory();

  const logging = (event) => {

    event.preventDefault();

    const body = {
      nickname: form.nickname,
      password: form.password,
    };

    axios
      .post("https://backend-fullstack-labenu.herokuapp.com/user/login", body)
      .then((res) => {
        goToHome(history);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={logging}>
      <p>Login</p>
      <input
        placeholder="Nickname"
        name="nickname"
        type="text"
        value={form.nickname}
        onChange={onChange}
      />
      <input
        placeholder="Senha"
        name="password"
        type="password"
        value={form.password}
        onChange={onChange}
      />
      <button>Fazer login</button>
    </form>
  );
}
