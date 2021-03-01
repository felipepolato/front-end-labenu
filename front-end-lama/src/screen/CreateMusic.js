import React, { useEffect, useState } from "react";
import useForm from "../hoock/useForm";
import axios from "axios";

function CreateMusic() {
  const [allMusics, setAllMusics] = useState([]);

  const { form, onChange } = useForm({
    name: "",
    nickname: "",
  });

  useEffect(() => {
    getAllMusics();
  }, []);

  const getAllMusics = () => {
    axios
      .get("https://backend-fullstack-labenu.herokuapp.com/music/createMusic")
      .then((response) => {
        setAllMusics(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div>
      {allMusics.map((item) => {
        return (
          (<p key={item.id}>{item.id}</p>),
          (<p>{item.title}</p>),
          (<p>{item.author}</p>),
          (<p>{item.date}</p>),
          (<p>{item.file}</p>)
        );
      })}

      <form onSubmit={onSubmitForm}>
        <p>Musicas</p>
        <input
          value={form.name}
          placeholder={"Nome"}
          onChange={handleInputChange}
          name={"name"}
          type={"text"}
          pattern={"[A-Za-z]{3,}"}
          required
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default CreateMusic;
