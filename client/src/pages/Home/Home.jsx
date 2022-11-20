import Cards from "../../components/Cards";

import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Home() {
  const [values, setValues] = useState();
  const [listUsers, setListUsers] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  useEffect(() => {
    axios.get("http://localhost:3001/getCards").then((response) => {
      setListUsers(response.data);
    });
  }, []);
  return (
    <div>
      <div>
        {typeof listUsers !== "undefined" &&
          listUsers.map((value) => {
            return (
              <Cards
                key={value.id}
                listCard={listUsers}
                setListCard={setListUsers}
                id={value.id}
                user={value.user}
                password={value.password}
              ></Cards>
            );
          })}
      </div>
    </div>
  );
}
