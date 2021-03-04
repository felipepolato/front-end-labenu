import React, { useState, useEffect } from "react";
import useForm from "../hoock/useForm";
import axios from "axios";
import Genre from "../componets/Genre";
import Album from "../componets/Album";

export default function CreateMusic() {
  const [idAlbum, setIdAlbum] = useState([]);
  const [idGenres, setIdGenres] = useState([]);
  const { form, onChange } = useForm({
    title: "",
    file: "",
    genresIds: "",
    albumId: "",
  });

  useEffect(() => {
    getGenres();
    createMusics();
    getAlbum();
  }, []);

  const createMusics = (event) => {
    event.preventDefault();

    const body = {
      title: form.title,
      file: form.file,
      genresIds: form.genresIds,
      albumId: form.albumId,
    };

    console.log(body);

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  // console.log(createMusics())

  const getAlbum = () => {
    axios
      .get("https://backend-fullstack-labenu.herokuapp.com/music/albums", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setIdAlbum(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getGenres = () => {
    axios
      .get("https://backend-fullstack-labenu.herokuapp.com/music/genres", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setIdGenres(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  //

  return (
    <div>
      <form onSubmit={createMusics}>
        {idAlbum &&
          idAlbum.map((item) => {
            return (
              <select value={form.albumId} onChange={onChange} required>
                <option>{item.name}</option>
              </select>
            );
          })}

        {idGenres &&
          idGenres.map((item) => {
            return (
              <select value={form.albumId} onChange={onChange} required>
                <option>{item.name}</option>
              </select>
            );
          })}

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
