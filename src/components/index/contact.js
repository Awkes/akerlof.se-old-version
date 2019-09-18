import React from "react";
import Heading from "../../components/heading";
import VisibilitySensor from "../../components/visibilitySensor";
import styles from "../../styles/contact.module.scss";
import contact from "../../images/contact.svg";

export default() => (
  <div className={styles.content}>
    <Heading>Kontakt</Heading>
    <div className={styles.contact}>
      <form name="Kontaktformulär - akerlof.se" method="POST" data-netlify="true" className={styles.form}>
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
      <VisibilitySensor once>
        {({isVisible}) => (
          <div className={`${styles.img} ${isVisible ? styles.imgActive : ''}`}>
            <img src={contact} alt="Kontakt" />
          </div>
        )}
      </VisibilitySensor>
    </div>
  </div>
);