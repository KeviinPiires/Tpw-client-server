// HOOKS 
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// CSS
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="/">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nicolasxs/" target="blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/NicolasXs" target="blank">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Mari&Juana</span> &copy; 2022
      </p>
    </footer>
  );
}


