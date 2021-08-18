/* eslint-disable */

import React from "react";

const TextBody = (props) => {
  
  return (
    <React.Fragment>
      {props.paragraphs.map((paragraph, index) => (
        <p key={index} className={props.className}>{paragraph}</p>
      ))}
    </React.Fragment>
  );
}

export default TextBody;