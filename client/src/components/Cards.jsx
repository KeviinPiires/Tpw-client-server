import React from "react";
import styles from "../styles/Cards.module.css";

export default function Cards(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className={styles.card_container} onClick={() => setOpen(true)}>
        <p className={styles.card_id}>{props.id}</p>
        <h3>User: {props.user}</h3>
        {/* <h3 className={styles.card_cost}>E-mail: {props.email}</h3> */}
        <h3 className={styles.card_senha}>Senha: {props.password}</h3>
      </div>
    </>
  );
}
