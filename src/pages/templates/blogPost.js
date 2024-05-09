import * as React from "react";
import { Link, graphql } from "gatsby";
import parse from "html-react-parser";

const PostPage = ( { pageContext } ) => {

  return(
    <main>
      <h1>{pageContext.title}</h1>
      <div>{parse(pageContext.content)}</div>
    </main>
  );
}

export default PostPage;
export const Head = () => <title>Home Page</title>;
