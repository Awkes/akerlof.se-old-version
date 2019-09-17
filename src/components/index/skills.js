import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Heading from "../../components/heading";
import styles from "../../styles/skills.module.scss";

function toggleSkillInfo(e) {
  const infoBox = e.currentTarget.parentElement.lastChild;
  infoBox.classList.toggle(styles.active);
}

export default() => {
  const data = useStaticQuery(
    graphql`
      query {
        allSkillsYaml {
          nodes {
            skill
            img
            text
          }
        }
      }
    `
  );
  return (
    <div className={styles.content}>
      <Heading>Skills</Heading>
      <div className={styles.icons} >
        {data.allSkillsYaml.nodes.map((skill, i) => 
          <div className={styles.icon} key={i}>
            <img src={skill.img} alt={skill.skill} className={styles.icon} onClick={toggleSkillInfo} />
            <div className={styles.text} onClick={toggleSkillInfo}>
              <img src={skill.img} alt={skill.skill} />
              <div>
                <h2>{skill.skill}</h2>
                <p>{skill.text}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}