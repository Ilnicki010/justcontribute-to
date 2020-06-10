import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.scss";
import SingleIssue from "../../components/SingleIssue/SingleIssue";
import Form from "../../components/Form/Form";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Intro from "../../components/Intro/Intro";
import Loader from "../../components/Loader/Loader";
import RepositoryInfo from "../../components/RepositoryInfo/RepositoryInfo";

import Header from "../../components/Header/Header";

export default function Home() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    window.analytics.page("Home");
  }, []);

  function searchIssues(language, popularity) {
    window.analytics.track("Search for issue", {
      language,
      popularity,
    });
    setLoading(true);
    axios
      .post(
        "https://www.api.ilnicki.dev/justcontribute/repos",
        { language, popularity },
        {
          auth: {
            username: "appadminilnicki",
            password: process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((data) => {
        setResults(data.data);
        setLoading(false);
      });
  }
  return (
    <main className={styles.wrapper}>
      <Header
        titles={[
          { tag: "h1", value: "Let's join to some open-source project!" },
          {
            tag: "h2",
            value:
              "Browse open issues meant for newcomers & start contributing",
          },
        ]}
      />
      <div className={styles.formWrapper}>
        <Form
          onSubmit={(language, popularity) => {
            setShowIntro(false);
            searchIssues(language, popularity);
          }}
        />
      </div>
      {!showIntro ? (
        <div className={styles.contentWrapper}>
          {loading ? (
            <div className={styles.loaderWrapper}>
              <Loader />
              <span>Talking with Github...</span>
            </div>
          ) : (
            <div>
              {results.repos_count > 0 ? (
                <div>
                  <Title tag="h2">
                    List of issues from {results.repos_count} repos
                  </Title>
                  {Object.entries(results.items).map((item) => (
                    <div key={item}>
                      <div
                        onClick={() =>
                          window.analytics.track("Go to repo clicked")
                        }
                      >
                        <a
                          className={styles.repoName}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://github.com/${item[0].replace(
                            "https://api.github.com/repos/",
                            ""
                          )}`}
                        >
                          <RepositoryInfo url={item[0]} />
                        </a>
                      </div>
                      <div className={styles.issuesList}>
                        {item[1].map(
                          ({
                            title,
                            labels,
                            body,
                            created_at,
                            updated_at,
                            html_url,
                            id,
                          }) => (
                            <SingleIssue
                              key={id}
                              title={title}
                              labels={labels}
                              body={body.slice(0, 300)}
                              created_at={created_at}
                              updated_at={updated_at}
                              issue_url={html_url}
                            />
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <Title tag="span">We didn't find anything :(</Title>
                  <p>Try changing the 'popularity' parameter</p>
                </div>
              )}
            </div>
          )}

          <div className={styles.navBarWrapper}>
            <NavBar social />
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </main>
  );
}
