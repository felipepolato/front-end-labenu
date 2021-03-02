import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    getMusics();
  }, []);

  const getMusics = () => {
    axios
      .get("https://backend-fullstack-labenu.herokuapp.com/music/all", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setMusics(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {musics &&
        musics.map((item) => {
          return (
            (<p key={item.id}>{item.id}</p>),
            (<p>{item.title}</p>),
            (<p>{item.author}</p>),
            (<p>{item.date}</p>),
            (<p>{item.file}</p>)
          );
        })}
    </div>
  );
}
