/* eslint-disable */

import React from "react";

const TextBody = (props) => {
  
  return (
    <div>
      {props.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default TextBody;