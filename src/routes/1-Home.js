import PageHeading from '../components/PageHeading';
import TextBody from '../components/TextBody';

const Home = () => (
  <main className="home-route">
    <PageHeading value="Welcome to our page!" />
    <TextBody paragraphs={['Lorem ipsum 1', 'Lorem ipsum 2', 'Lorem ipsum 3']} />
  </main>
);

export default Home;
