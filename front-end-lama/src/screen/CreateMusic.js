import React, { useState } from "react";
import useForm from "../hoock/useForm";
import axios from "axios";
import Genre from "../componets/Genre";
import Album from "../componets/Album";

export default function CreateMusic() {
  const { form, onChange } = useForm({
    title: "",
    file: "",
    genresIds: [],
    albumId: "",
  });

  const createMusics = (event) => {
    event.preventDefault();

    const body = {
      title: form.title,
      file: form.file,
      genresIds: form.genresIds,
      albumId: form.albumId,
    };

    axios
      .post(
        "https://backend-fullstack-labenu.herokuapp.com/music/createMusic",
        body,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        alert("Musica Criada");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <form onSubmit={createMusics}>
        <p>Musicas</p>

        <input
          value={form.title}
          placeholder={"Titulo"}
          onChange={onChange}
          name={"title"}
          type={"text"}
        />

        <input
          value={form.file}
          placeholder={"Url Musica"}
          onChange={onChange}
          name={"file"}
          type={"text"}
        />

        <Genre />
        <Album />

        <button>Enviar</button>
      </form>
    </div>
  );
}
