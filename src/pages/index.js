import React from "react";
import Layout from "../components/layout";
import Home from "../components/index/home";
import Portfolio from "../components/index/portfolio";
import Contact from "../components/index/contact";

export default () => (
  <Layout>
    <Home parentId="home" />
    {/* <About parentId="about" /> */}
    {/* <Skills parentId="skills" />> */}
    <Portfolio parentId="portfolio" />
    <Contact parentId="contact" />
  </Layout>
);
