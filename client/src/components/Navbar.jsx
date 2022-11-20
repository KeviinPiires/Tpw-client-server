import styles from "../styles/Navbar.module.css";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.logo} to="/">
        <h1>Mari&Juana</h1>
      </NavLink>
      <ul className={styles.link_items}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/login">Logar</NavLink>
        </li>
      </ul>
    </nav>
  );
}
