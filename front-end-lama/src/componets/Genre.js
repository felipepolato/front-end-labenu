import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Genre(props) {
  const [idGenres, setIdGenres] = useState([]);

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = () => {
    axios
      .get("https://backend-fullstack-labenu.herokuapp.com/music/genres", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setIdGenres(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <p>Genero</p>

      <select
        value={props.form.value}
        onChange={props.onChange}
        name="genresId"
        required
      >
        {idGenres &&
          idGenres.map((item) => {
            return (
              <option value={item.id} name={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}
