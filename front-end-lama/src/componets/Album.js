import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CreateAlbum(props) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbum();
  }, []);

  const getAlbum = () => {
    axios
      .get("https://backend-fullstack-labenu.herokuapp.com/music/albums", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <p>Album</p>

      <select
        value={props.form.value}
        onChange={props.onChange}
        name="albumId"
        required
      >
        {albums &&
          albums.map((item) => {
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
