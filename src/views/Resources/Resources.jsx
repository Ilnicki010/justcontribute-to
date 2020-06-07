import React from "react";
import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";
import BackLink from "../../components/BackLink/BackLink";
import { Helmet } from "react-helmet";

import styles from "./Resources.module.scss";

export default function Resources() {
  return (
    <main>
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Helmet>
      <BackLink />
      <Header
        titles={[{ tag: "h1", value: "Great resources about open-source" }]}
        subtitle="Here you can find the list of usefull articles, tweets, accounts which
          help you start the journey with open-source. The list will be updating. If you know any
          interesting publications about OS please let me know on Twitter"
      >
        <a
          href="https://twitter.com/intent/tweet?screen_name=dominikilnicki&ref_src=twsrc%5Etfw"
          class="twitter-mention-button"
          data-show-count="false"
        >
          Tweet to @dominikilnicki
        </a>
      </Header>
      <section className={styles.contentWrapper}>
        <article className={styles.resourceType}>
          <Title tag="h2">Articles (7)</Title>
          <ul className={styles.list}>
            <li className={styles.listElement}>
              <a href="https://opensource.guide/how-to-contribute/">
                How to Contribute to Open Source by opensource.guide
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://css-tricks.com/open-source-etiquette-guidebook/">
                An Open Source Etiquette Guidebook by Kent C. Dodds and Sarah
                Drasner
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source">
                An Introduction to Open Source by Lisa Tagliaferri
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://www.freecodecamp.org/news/the-definitive-guide-to-contributing-to-open-source-900d5f9f2282/">
                The Definitive Guide to Contributing to Open Source by Piotr
                Gaczkowski
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://medium.com/codezillas/a-bitter-guide-to-open-source-a8e3b6a3c1c4">
                A Bitter Guide To Open Source by Ken Wheeler
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://www.quora.com/How-do-I-get-started-with-Open-Source-Contributions/answer/Dinu-Kumarasiri">
                How do I get started with Open Source Contributions? by Dinu
                Kumarasiri
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://github.com/firstcontributions/first-contributions/blob/master/README.md">
                First Contributions
              </a>
            </li>
          </ul>
        </article>
        <article className={styles.resourceType}>
          <Title tag="h2">Twitter accounts (8)</Title>

          <ul className={styles.list}>
            <li className={styles.listElement}>
              <a href="https://twitter.com/OpenSourceOrg">
                OpenSourceInitiative (@OpenSourceOrg)
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://twitter.com/daKmoR">Thomas Allmer (@daKmoR)</a>
            </li>
            <li className={styles.listElement}>
              <a href="https://twitter.com/marcelpociot">
                Marcel Pociot (@marcelpociot)
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://twitter.com/marcelpociot">
                Paul O’Shannessy (@zpao)
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://twitter.com/Atinux">
                Sébastien Chopin (@Atinux)
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://twitter.com/fbOpenSource">
                Facebook Open Source (@fbOpenSource)
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://twitter.com/TwitterOSS">
                Twitter Open Source (@TwitterOSS)
              </a>
            </li>
            <li className={styles.listElement}>
              <a href="https://twitter.com/AllThingsOpen">
                All Things Open (@AllThingsOpen)
              </a>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
