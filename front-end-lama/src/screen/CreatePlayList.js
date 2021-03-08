import React from "react";
import axios from "axios";
import useForm from "../hoock/useForm";

export default function CreatePlayList() {
  //   const [newPlayList, setNewPlayList];
  const { form, onChange } = useForm({
    title: "",
    file: "",
    genresIds: [],
    albumId: "",
  });

  const creationPlaylist = (event) => {
    event.preventDefault();

    const body = {
      title: form.title,
      file: form.file,
      genresIds: form.genresIds,
      albumId: form.albumId,
    };

    axios
      .post(
        "",
        body,
        {
          headers: {
            Authorization: "token",
          },
        }
      )
      .then((response) => {
        alert("PLAYLIST CRIADA");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
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
          value={form.file}
          placeholder={"Url Musica"}
          onChange={onChange}
          name={"file"}
          type={"text"}
        />

<input
          value={form.genresIds}
          placeholder={"Genero"}
          onChange={onChange}
          name={"genresIds"}
          type={"text"}
        />

<input
          value={form.albumId}
          placeholder={"Album"}
          onChange={onChange}
          name={"albumId"}
          type={"text"}
        />
        <button >Criar Playlist</button>
      </form>
    </div>
  );
}
