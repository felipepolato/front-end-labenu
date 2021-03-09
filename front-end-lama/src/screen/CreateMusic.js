import React from "react";
import axios from "axios";
import useForm from "../hoock/useForm";
// import Genre from "../componets/Genre";
// import Album from "../componets/Album";

export default function CreateMusic() {
  const { form, onChange } = useForm({
    title: "",
    author: "",
    file: "",
    album: "",
    genres: undefined,
  });

  const createMusics = (event) => {
    event.preventDefault();

    const body = {
      title: form.title,
      author: form.author,
      file: form.file,
      album: form.album,
      genres: form.genres,
    };

    axios
      .post("https://lamusic.herokuapp.com/music/create", body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
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
          value={form.author}
          placeholder={"Autor"}
          onChange={onChange}
          name={"author"}
          type={"text"}
        />

        <input
          value={form.file}
          placeholder={"Url Musica"}
          onChange={onChange}
          name={"file"}
          type={"text"}
        />

        <input
          value={form.album}
          placeholder={"Album"}
          onChange={onChange}
          name={"album"}
          type={"text"}
        />

        <input
          value={form.genres}
          placeholder={"Genero"}
          onChange={onChange}
          name={"genres"}
          type={"text"}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}
