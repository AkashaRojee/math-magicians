/* eslint-disable */
import React from "react";
import PageHeading from "../components/PageHeading";
import TextBody from "../components/TextBody";

const Home = () => {
  return (
    <React.Fragment>
      <PageHeading value="Welcome to our page!" />
      <TextBody paragraphs={["Lorem ipsum 1", "Lorem ipsum 2", "Lorem ipsum 3"]} />
    </React.Fragment>
  );
}

export default Home;