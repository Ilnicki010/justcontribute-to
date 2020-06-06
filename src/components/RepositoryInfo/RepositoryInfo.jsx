import React, { useEffect, useState } from "react";
import ExternalLinkIcon from "../../components/ExternalLinkIcon/ExternalLinkIcon";
import styles from "./RepositoryInfo.module.scss";
import axios from "axios";
export default function RepositoryInfo({ url }) {
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        auth: {
          username: "Ilnicki010",
          password: process.env.REACT_APP_GH_KEY,
        },
      })

      .then((data) => {
        setRepoData(data.data);
        console.log(data.data);

        setLoading(false);
      });
  }, [url]);
  return (
    <>
      {!loading && repoData ? (
        <div className={styles.wrapper}>
          <a href={repoData.html_url} target="_blank" rel="noopener noreferrer">
            <span className={styles.fullName}>{repoData.full_name}</span>
            <ExternalLinkIcon fill="#5067e9" size="18px" />
          </a>
          <div className={styles.moreInfo}>
            {repoData?.license?.name && (
              <span className={styles.licenceName}>
                License: {repoData.license.name}
              </span>
            )}
            {repoData?.description && (
              <span className={styles.description}>
                Desc: {repoData.description}
              </span>
            )}
          </div>
        </div>
      ) : (
        <span>...</span>
      )}
    </>
  );
}
