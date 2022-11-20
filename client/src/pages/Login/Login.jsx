import styles from "../../styles/Login.module.css";

import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [values, setValues] = useState();
  console.log(values);
  
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    axios
      .post("http://localhost:3001/register", {
        user: values.user,
        password: values.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className={styles.app_container}>
      <div className={styles.register_container}>
        <h1 className={styles.register_title}>Login</h1>
        <input
          type="text"
          name="user"
          placeholder="User"
          className={styles.register_input}
          onChange={handleChangeValues}
        />
        <input
          type="password"
          name="password"
          placeholder="pasword"
          className={styles.register_input}
          onChange={handleChangeValues}
        />
        <button
          className={styles.register_button}
          onClick={handleClickButton}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}
