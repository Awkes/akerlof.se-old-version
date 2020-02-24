import React from "react";
import Layout from "../components/layout";
import ThankYou from "../components/submit/thankyou";
import stylesThankYou from "../styles/thankyou.module.scss";

export default () => (
  <Layout>
    <ThankYou parentId="thankyou" parentClassName={stylesThankYou.parent} />
  </Layout>
);
