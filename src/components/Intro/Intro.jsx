import React from "react";
import Title from "../Title/Title";
import styles from "./Intro.module.scss";
import { Link } from "react-router-dom";
export default function Intro() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.mainHeader}>
        <Title tag="h1">How it works?</Title>
      </header>
      <article className={styles.stepsList}>
        <div className={styles.stepsListElement}>
          <img
            src={require("../../assets/icons/number-1.svg")}
            alt=""
            width="100px"
          />

          <div>
            <h2>Set language & popularity</h2>
            <p>
              Popularity refers to the number of interactions (comments,
              reactions) under issue. Low popularity might be a sign that fewer
              people are interested in that task or repository is less popular.
            </p>
          </div>
        </div>
        <div className={styles.stepsListElement}>
          <img
            src={require("../../assets/icons/number-2.svg")}
            alt=""
            width="100px"
          />
          <div>
            <h2>Browse issues & find best fit for you</h2>
            <p>
              You can browse all the issue from different repos that are
              labelled
            </p>
          </div>
        </div>
        <div className={styles.stepsListElement}>
          <img
            src={require("../../assets/icons/number-3.svg")}
            alt=""
            width="100px"
          />
          <div>
            <h2>Start contributing!</h2>
            <p>
              Let's go! Remember no one will be offended because you try to help
              in his project! If it's your first time in OSS check
              <Link to="resources"> resources</Link>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
