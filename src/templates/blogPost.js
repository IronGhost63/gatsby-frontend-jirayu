import * as React from "react";
import parse from "html-react-parser";

const PostPage = ( { pageContext } ) => {

  return(
    <main>
      <div className="container-md mx-auto">
        <h1 className="text-lg font-bold">{pageContext.title}</h1>
        <div>{parse(pageContext.content)}</div>
      </div>
    </main>
  );
}

export default PostPage;
export const Head = ({pageContext}) => <title>{pageContext.title}</title>;
