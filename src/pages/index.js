import React from "react";
import Layout from "../components/layout";
import Home from "../components/index/home";
import Skills from "../components/index/skills";
import About from "../components/index/about";
import Projects from "../components/index/projects";
import Contact from "../components/index/contact";
import stylesHome from "../styles/home.module.scss";
import stylesAbout from "../styles/about.module.scss";

export default () => (
  <Layout>
    <Home parentId="home" parentClassName={stylesHome.parent} />
    <About parentId="about" parentClassName={stylesAbout.parent} />
    <Skills parentId="skills" />
    <Projects parentId="projects" />
    <Contact parentId="contact" />
  </Layout>
);
