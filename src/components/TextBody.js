import React from 'react';
import PropTypes from 'prop-types';

const TextBody = (props) => {
  const { paragraphs } = props;
  let index = 0;

  return (
    <div>
      {paragraphs.map((paragraph) => {
        index += 1;
        return (
          <p key={index}>{paragraph}</p>
        );
      })}
      ;
    </div>
  );
};

TextBody.propTypes = {
  paragraphs: PropTypes.instanceOf(Array).isRequired,
};

export default TextBody;
