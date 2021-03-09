import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ColectionPlayList() {
  const [newPlayList, setNewPlayList] = useState("");

  useEffect(() => {
    getPlayList();
  }, []);

  const getPlayList = () => {
    axios
      .get("https://lamusic.herokuapp.com/playlist", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setNewPlayList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {newPlayList &&
        newPlayList.playlist.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
}
