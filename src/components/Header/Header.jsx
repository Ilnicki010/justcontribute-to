import React from "react";
import styles from "./Header.module.scss";
import Title from "../Title/Title";
export default function Header({ titles, subtitle = null }) {
  return (
    <header className={styles.wrapper}>
      {titles.map((title) => (
        <Title tag={title.tag} isCenter>
          {title.value}
        </Title>
      ))}

      {subtitle && <span className={styles.subTitle}>{subtitle}</span>}
    </header>
  );
}
