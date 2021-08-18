/* eslint-disable */
import TextBody from "../components/TextBody";

const Quote = () => {
  return (
    <main className="quote-route">
      <TextBody
        paragraphs={[
          "Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. - William Paul Thurston"
        ]}
        className="quote"
      />
    </main>
  );
}

export default Quote;