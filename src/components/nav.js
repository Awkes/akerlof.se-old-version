import React from "react";
import {Link} from "gatsby";
import Icons from "../components/icons";
import styles from "../styles/nav.module.scss";

const NavLink = ({url, children}) => (
    <li key={url}>
      <Link to={url} className={styles.navLink}>{children}</Link>
    </li>
);

export default({onClick}) => (
  <nav onClick={onClick}>
    <ul className={styles.navList}>
      <NavLink url="/#about">Andreas</NavLink>
      <NavLink url="/#skills">Skills</NavLink>
      <NavLink url="/#projects">Projects</NavLink>
      <NavLink url="/#contact">Contact</NavLink>
      <NavLink url="/blog">Blog</NavLink>
    </ul>
    <Icons />
  </nav>
);