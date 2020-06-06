import React from "react";
import styles from "./NavBar.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export default function NavBar({
  children,
  social = false,
  secondary = false,
}) {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <Link to="how-it-works">
            <Button secondary>How it works</Button>
          </Link>
        </li>
        <li>
          <Link to="why-contribute">
            <Button secondary>Why should you contribute</Button>
          </Link>
        </li>
        <li>
          <Link to="resources">
            <Button secondary>Great resources about OS</Button>
          </Link>
        </li>
        <li>
          <Button secondary>About the project</Button>
        </li>
        {social && <></>}
      </ul>
    </nav>
  );
}
