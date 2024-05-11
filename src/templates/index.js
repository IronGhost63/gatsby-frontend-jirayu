import * as React from "react";
import PostList from "../components/postList";
import Layout from "./layout";
import MyInfo from "../components/myInfo";
import Pagination from "../components/Pagination";

const IndexPage = ({pageContext}) => {
  return (
    <Layout>
      <main className="container max-w-screen-lg mx-auto p-1 md:p-4">
        <div className="md:grid md:grid-cols-2">
          <div>
            <MyInfo/>
          </div>
          <div>
            <h2 className="text-3xl mb-4 p-2">Blog</h2>
            <PostList items={pageContext.items} className="mb-4"/>
            <Pagination currentPage={1} totalPages={pageContext.totalPages} basePath="/blog"/>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
export const Head = () => <title>Home Page</title>
