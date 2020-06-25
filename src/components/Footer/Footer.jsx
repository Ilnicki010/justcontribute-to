import React from "react";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <span>
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        and{" "}
        <span role="img" aria-label="love">
          ☕{" "}
        </span>{" "}
        by{" "}
        <a
          href="https://twitter.com/dominikilnicki"
          className={styles.twitterLink}
        >
          @dominikilnicki
        </a>
      </span>
    </footer>
  );
}
