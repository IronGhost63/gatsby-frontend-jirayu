import * as React from "react";
import Layout from "./layout";
import ContentArea from "../components/contentArea";

const PostPage = ( { pageContext } ) => {

  return(
    <Layout>
      <main className="container max-w-screen-sm mx-auto p-1 md:p-4">
        <div className="md:grid md:grid-cols-1 pt-5">
          <h1 className="text-3xl font-bold mb-6">{pageContext.title}</h1>
          <ContentArea content={pageContext.content} />
        </div>
      </main>
    </Layout>
  );
}

export default PostPage;
export const Head = ({pageContext}) => <title>{pageContext.title}</title>;
