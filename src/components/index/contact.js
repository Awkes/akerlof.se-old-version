import React from "react";
import Heading from "../../components/heading";
import styles from "../../styles/contact.module.scss";

export default() => (
  <div className={styles.content}>
    <Heading>Kontakt</Heading>
    <form id="contactForm" className={styles.form}>
      <label htmlFor="contactName">Namn</label>
      <input className={styles.input} id="contactName" type="text" name="name" maxLength="100" />
      <label htmlFor="contactEmail">E-post</label>
      <input className={styles.input} id="contactEmail" type="email" name="email" maxLength="100" />
      <label htmlFor="contactMsg" className={styles.msg}>
        <span>Meddelande</span>
        {/* <span id="contactCount">(0 / 1000)</span> */}
      </label>
      
      <textarea className={styles.textarea} id="contactMsg" name="msg" maxLength="1000" />
      <button className={styles.btn} disabled>Skicka</button>
    </form>
  </div>
);