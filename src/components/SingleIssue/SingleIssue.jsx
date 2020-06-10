import React from "react";
import Button from "../Button/Button";
import ExternalLinkIcon from "../ExternalLinkIcon/ExternalLinkIcon";
import styles from "./SingleIssue.module.scss";
export default function SingleIssue({
  title,
  created_at,
  updated_at,
  labels,
  body,
  issue_url,
}) {
  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return month + "/" + day + "/" + year;
  }
  return (
    <article className={styles.wrapper}>
      <header className={styles.issueHeader}>
        <h3 className={styles.issueTitle}>{title}</h3>
        <div className={styles.issueDateWrapper}>
          <span className={styles.issueDate}>
            Created at {getFormattedDate(new Date(created_at))}
          </span>
          <span className={styles.issueDate}>
            Last update at {getFormattedDate(new Date(updated_at))}
          </span>
        </div>
      </header>
      <ul className={styles.labelsList}>
        {labels.map((label) => (
          <div key={label.id} className={styles.labelWrapper}>
            <div
              className={styles.labelColor}
              style={{ background: `#${label.color}` }}
            ></div>
            <li className={styles.labelItem} key={label.id}>
              {label.name}
            </li>
          </div>
        ))}
      </ul>
      <p className={styles.bodyText}>{body}</p>
      <div
        className={styles.buttonWrapper}
        onClick={() => window.analytics.track("Go to issue clicked")}
      >
        <Button href={issue_url}>
          Go to issue <ExternalLinkIcon fill="#fff" size="12px" />
        </Button>
      </div>
    </article>
  );
}
