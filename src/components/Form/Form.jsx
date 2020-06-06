import React, { useState } from "react";
import Button from "../Button/Button";
import Select from "react-select";
import languageOptions from "../../constatnts/languages";
import styles from "./Form.module.scss";
export default function Form({ onSubmit }) {
  const [language, setLanguage] = useState(null);
  const [popularity, setPopularity] = useState(null);
  const [error, setError] = useState(null);

  const popularityOptions = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid rgb(80,103,233)",
      background: "#fff",
      color: "rgb(80,103,233)",
      padding: 15,
    }),
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (language && popularity) {
          setError(null);
          onSubmit(language, popularity);
        } else {
          setError(
            "You need to set programming language and how popular issues you want to get"
          );
        }
      }}
      className={styles.wrapper}
    >
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="language">
          Programming language
        </label>
        <Select
          styles={customStyles}
          setValue={() => language}
          options={languageOptions}
          onChange={(e) => setLanguage(e.value)}
        />
      </div>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="popularity">
          Popularity of issue
        </label>
        <Select
          styles={customStyles}
          setValue={() => popularity}
          options={popularityOptions}
          onChange={(e) => setPopularity(e.value)}
        />
      </div>
      <Button type="submit">Search</Button>
      {error && <span className={styles.error}>{error}</span>}
    </form>
  );
}
