import * as React from 'react';
import parse from "html-react-parser";
import "../styles/content.scss";

const ContentArea = ({content}) => {
  return(
    <div className="content">{parse(content)}</div>
  );
}

export default ContentArea;
