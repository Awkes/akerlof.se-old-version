import React from "react";
import linkedIn from "../images/linkedin.svg";
import gitHub from "../images/github.svg";
import styles from "../styles/icons.module.scss";

const IconLink = ({title, url, img}) => (
  <a href={url} className={styles.icon} target="_blank" rel="noopener noreferrer">
    <img src={img} alt={title} />
  </a>
);

export default() => (
  <div>
    <IconLink title="LinkedIn" url="https://www.linkedin.com/in/akerlof" img={linkedIn} />
    <IconLink title="GitHub" url="https://github.com/awkes" img={gitHub} />
   </div>
);
