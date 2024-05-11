import * as React from "react";
import parse from "html-react-parser";
import Layout from "./layout";
import "../styles/content.scss";

const PostPage = ( { pageContext } ) => {

  return(
    <Layout>
      <main className="container max-w-screen-sm mx-auto p-1 md:p-4">
        <div className="md:grid md:grid-cols-1 pt-5">
          <h1 className="text-3xl font-bold mb-6">{pageContext.title}</h1>
          <div className="content">{parse(pageContext.content)}</div>
        </div>
      </main>
    </Layout>
  );
}

export default PostPage;
export const Head = ({pageContext}) => <title>{pageContext.title}</title>;
