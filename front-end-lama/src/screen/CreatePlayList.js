import React from "react";
import axios from "axios";
import useForm from "../hoock/useForm";

export default function CreatePlayList() {
  const { form, onChange } = useForm({
    title: "",
    subtitle: "",
    image: "",
  });

  const creationPlaylist = (event) => {
    event.preventDefault();

    const body = {
      title: form.title,
      subtitle: form.subtitle,
      image: form.image,
    };

    axios
      .put("https://lamusic.herokuapp.com/playlist/create", body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        alert("PLAYLIST CRIADA");
        console.log(response.data);
      })
      .catch((error) => {
        alert("PLAYLIST NÃO CRIADA");
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={creationPlaylist}>
      <p>New PlayList</p>

      <input
        value={form.title}
        placeholder={"Titulo"}
        onChange={onChange}
        name={"title"}
        type={"text"}
      />

      <input
        value={form.subtitle}
        placeholder={"Subtitlo"}
        onChange={onChange}
        name={"subtitle"}
        type={"text"}
      />

      <input
        value={form.image}
        placeholder={"Imagem"}
        onChange={onChange}
        name={"image"}
        type={"text"}
      />

      <button>Criar Playlist</button>
    </form>
  );
}
