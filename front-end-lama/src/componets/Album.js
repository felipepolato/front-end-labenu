import React, { useState } from "react";
import useForm from "../hoock/useForm";
import axios from "axios";

export default function CreateAlbum() {
  const { form, onChange } = useForm({
    name: "",
  });

  const CreateAlbuns = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
    };

    axios
      .post(
        "https://backend-fullstack-labenu.herokuapp.com/music/createAlbum",
        body,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        alert("Album Criado");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <form onSubmit={CreateAlbuns}>
      <p>Album</p>

      <input
        value={form.name}
        placeholder={"Album"}
        onChange={onChange}
        name={"name"}
        type={"text"}
      />

      {/* <button>Enviar</button> */}
    </form>
  );
}
