/* eslint-disable */
import PageHeading from "../components/PageHeading";
import TextBody from "../components/TextBody";

const Home = () => {
  return (
    <div>
      <PageHeading value="Welcome to our page!" />
      <TextBody paragraphs={["Lorem ipsum 1", "Lorem ipsum 2", "Lorem ipsum 3"]} />
    </div>
  );
}

export default Home;