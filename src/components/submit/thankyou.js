import React from "react";
import {Link} from "gatsby";
import Heading from "../../components/heading";
import styles from "../../styles/thankyou.module.scss";

export default() => (
  <div className={styles.content}>
    <Heading>Kontakt</Heading>
    <p>
      Tack för ditt meddelande, jag återkommer så snart jag kan.
      <br />
      <Link to="/#contact">Klicka här</Link> för att återgå till föregående sida.
    </p>
  </div>
);