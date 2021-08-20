import renderer from 'react-test-renderer';
import TextBody from '../TextBody';

test('TextBody renders correctly', () => {
  const paragraphs = ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'];

  const tree = renderer
    .create(
      <TextBody
        paragraphs={paragraphs}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
