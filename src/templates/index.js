import * as React from "react";
import PostList from "../components/postList";
import { graphql } from "gatsby";
import Layout from "./layout";

const IndexPage = ({data, pageContext}) => {
  return (
    <Layout>
      <main className="container mx-auto p-1 md:p-4">
        <div className="md:grid md:grid-cols-2">
          <div>
            <p>Hello World</p>
            <p>PostsPerPage: {pageContext.postsPerPage}</p>
          </div>
          <div>
            <PostList items={data.allWpPost.nodes}/>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
export const Head = () => <title>Home Page</title>
export const query = graphql`
  query ($postsPerPage: Int){
    allWpPost(limit: $postsPerPage) {
      nodes {
        date
        slug
        title
        featuredImage {
          node {
            uri
          }
        }
      }
    }
  }
`;
