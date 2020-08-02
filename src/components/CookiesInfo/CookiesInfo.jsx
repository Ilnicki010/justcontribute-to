import React, { useState } from "react";

import Button from "../Button/Button";

import styles from "./CookiesInfo.module.scss";
export default function CookiesInfo() {
  const [showMsg, setShowMsg] = useState(true);
  return (
    <>
      {showMsg && (
        <div className={styles.CookiesInfo}>
          <span>This site uses cookies to provide you better experiences.</span>
          <Button onClick={() => setShowMsg(false)}>Got it</Button>
        </div>
      )}
    </>
  );
}
