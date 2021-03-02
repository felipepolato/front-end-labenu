import React, { useState } from "react";
import useForm from "../hoock/useForm";
import axios from "axios";

export default function CreateGenre() {
  const { form, onChange } = useForm({
    name: "",
  });

  const CreateGenres = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
    };

    axios
      .post(
        "https://backend-fullstack-labenu.herokuapp.com/music/createGenre",
        body,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        alert("Genero Criado");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <form onSubmit={CreateGenres}>
      <p>Genero</p>

      <input
        value={form.name}
        placeholder={"Genero"}
        onChange={onChange}
        name={"name"}
        type={"text"}
      />
      <button>Enviar</button>
    </form>
  );
}
