import * as React from "react";
import PostList from "../components/postList";
import { graphql } from "gatsby";

const IndexPage = ({data}) => {
  return (
    <main className="container mx-auto p-1 md:p-4">
      <div className="md:grid md:grid-cols-1">
        <div>
          <PostList items={data.allWpPost.nodes}/>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
export const Head = ({pageContext}) => <title>Page {pageContext.currentPage}</title>
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
