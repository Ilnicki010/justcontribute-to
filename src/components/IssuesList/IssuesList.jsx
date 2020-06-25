import React, { useEffect, useState } from "react";
import axios from "axios";
import RepositoryInfo from "../RepositoryInfo/RepositoryInfo";
import SingleIssue from "../SingleIssue/SingleIssue";
import styles from "./IssuesList.module.scss";
export default function IssuesList({ language, popularity, label }) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post(
        "http://localhost:3030/issues",
        { language, popularity, label },
        {
          auth: {
            username: "appadminilnicki",
            password: process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((data) => {
        setResults(data.data[0].items);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {!loading &&
        Object.entries(results).map((item) => (
          <div key={item}>
            <div
              className={styles.repoNameWrapper}
              onClick={() => window.analytics.track("Go to repo clicked")}
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
                    body={body ? body.slice(0, 300) : "No description provided"}
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
  );
}
