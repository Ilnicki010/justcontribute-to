import React from "react";
import styles from "./NavBar.module.scss";
import Button from "../Button/Button";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
export default function NavBar({
  children,
  social = false,
  secondary = false,
}) {
  return (
    <nav className={styles.wrapper}>
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Helmet>
      <ul className={styles.list}>
        <li>
          <Link to="how-it-works">
            <Button secondary>How it works</Button>
          </Link>
        </li>
        {/* <li>
          <Link to="why-contribute">
            <Button secondary>Why should you contribute</Button>
          </Link>
        </li> */}
        <li>
          <Link to="resources">
            <Button secondary>Great resources about OS</Button>
          </Link>
        </li>
        {social && (
          <>
            <li onClick={() => window.analytics.track("Donate clicked")}>
              <a
                className={styles.bmcButton}
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.buymeacoffee.com/dominikilnicki"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                  alt="Buy me a coffee"
                />
                <span style={{ marginLeft: "10px" }}> Buy me a coffee</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/dominikilnicki?ref_src=twsrc%5Etfw"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @dominikilnicki
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
