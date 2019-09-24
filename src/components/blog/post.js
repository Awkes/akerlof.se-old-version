import React from "react";
import Heading from "../../components/heading";
import styles from "../../styles/post.module.scss";

export default({title,date,img,children}) => (
  <div className={styles.content}>
    <Heading>{title}</Heading>
    <div className={styles.date}>{date}</div>
    <div className={styles.post}>
      {img ? <img src={img} alt={title} className={styles.img} /> : ''}
      <span className={styles.txt} dangerouslySetInnerHTML={{__html: children}} />
    </div>
  </div>
);