import React from "react";
import styles from "./Title.module.scss";
export default function Title({ tag: Tag, children, isCenter = false }) {
  const isCenteredStyles = isCenter
    ? { clipPath: `polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)`, left: "-5%" }
    : {
        clipPath: `polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)`,
        left: "-10px",
      };

  const decoratorStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    margin: "auto",
    width: "110%",
    height: "100%",
    background: "#000",
    zIndex: "-9",
    ...isCenteredStyles,
  };
  return (
    <div className={styles.wrapper}>
      <Tag className={styles.title}>{children}</Tag>
      <div style={decoratorStyle} />
    </div>
  );
}
