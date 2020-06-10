import React, { useEffect } from "react";
import Intro from "../../components/Intro/Intro";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import BackLink from "../../components/BackLink/BackLink";
export default function HowWorks() {
  useEffect(() => {
    window.analytics.page("How it works");
  }, []);
  return (
    <main>
      <BackLink />
      <Header
        titles={[{ tag: "h1", value: "Couple words about how it works" }]}
      />
      <Intro />
      <section>
        <Title tag="h2">Which issues do we fetch?</Title>
        <p>
          We fetch from Github only issues that:
          <ul>
            <li>are open</li>
            <li>have at least one of the "newcomers welcoming" label</li>
            <li>doesn't have linked pull request</li>
            <li>no one is assigned to them</li>
            <li>conversation is unlocked</li>
            <li>are in public repos</li>
          </ul>
        </p>
      </section>
    </main>
  );
}
