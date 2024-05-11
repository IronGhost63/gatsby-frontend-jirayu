import * as React from "react";
import PostList from "../components/postList";
import Layout from "./layout";
import Pagination from "../components/Pagination";

const BlogPaged = ({pageContext}) => {
  return (
    <Layout>
      <main className="container max-w-screen-lg mx-auto p-1 md:p-4">
        <div className="md:grid md:grid-cols-1">
          <div>
            <PostList items={pageContext.items} className="mb-4"/>
            <Pagination currentPage={pageContext.currentPage} totalPages={pageContext.totalPages} basePath="/blog"/>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPaged;
export const Head = ({pageContext}) => <title>Page {pageContext.currentPage}</title>;
