import * as React from "react";
import PostList from "../components/postList";
import { graphql } from "gatsby";
import Layout from "./layout";

const BlogPaged = ({data}) => {
  return (
    <Layout>
      <main className="container mx-auto p-1 md:p-4">
        <div className="md:grid md:grid-cols-1">
          <div>
            <PostList items={data.allWpPost.nodes}/>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPaged;
export const Head = ({pageContext}) => <title>Page {pageContext.currentPage}</title>;
export const query = graphql`
  query ($postPerPage: Int, $skip: Int){
    allWpPost(limit: $postPerPage, skip: $skip) {
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
