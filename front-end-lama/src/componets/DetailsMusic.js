import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MusicDetails() {
  const [detailsMusic, setDetailMusic] = useState([]);
  const pathParams = useParams();
  const id = pathParams.id;

  useEffect(() => {
    getMusicDetail();
  }, []);

  const getMusicDetail = () => {
    axios
      .get(`https://backend-fullstack-labenu.herokuapp.com/music/${id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setDetailMusic(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <p>DetailsMusic</p>
      {detailsMusic.map((details) => {
        return (
          (<p key={details.id}>{details.id}</p>),
          (<p>{details.title}</p>),
          (<p>{details.author}</p>),
          (<p>{details.date}</p>),
          (<p>{details.file}</p>)
        );
      })}
    </div>
  );
}
