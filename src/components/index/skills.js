import React from "react";
import VisibilitySensor from "../../components/visibilitySensor";
import {Trail} from "react-spring/renderprops";
import {useStaticQuery, graphql} from "gatsby";
import Heading from "../../components/heading";
import styles from "../../styles/skills.module.scss";

// Öppnar stänger information om skills
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
  const items = data.allSkillsYaml.nodes.map((skill) => 
    <>
      <img src={skill.img} alt={skill.skill} onClick={toggleSkillInfo} />
      <div className={styles.text} onClick={toggleSkillInfo}>
        <img src={skill.img} alt={skill.skill} />
        <div>
          <h2>{skill.skill}</h2>
          <p>{skill.text}</p>
        </div>
      </div>
    </>
  ); 
  return (
    <div className={styles.content}>
      <Heading>Skills</Heading>
      <div className={styles.icons}>
        <VisibilitySensor once>
          {({isVisible}) => (
            <Trail
              items={items} 
              keys={item => item.props.key} 
              from={{opacity: 0}} 
              to={{opacity: isVisible ? 1 : 0}}
              config={{tension: 270}}
            >
              {item => props => <div style={props} className={styles.icon}>{item}</div>}
            </Trail>
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
}