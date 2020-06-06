import React from "react";
import styles from "./BackLink.module.scss";
import { useHistory } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";

export default function BackLink() {
  const history = useHistory();

  return (
    <button
      type="button"
      className={styles.backLink}
      onClick={() => {
        history.goBack();
      }}
    >
      <ArrowLeft /> <span>Back</span>
    </button>
  );
}
