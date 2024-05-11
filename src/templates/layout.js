import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteTagline
        }
      }
    }
  `);

  return(
    <div>
      <div className="bg-gray-100 ">
        <div className="container max-w-screen-lg mx-auto p-2 md:p-4">
          <Link to="/"><h1 className="text-4xl mb-4">{data?.site.siteMetadata.title}</h1></Link>
          <h3 className="text-lg text-gray-500">{data?.site.siteMetadata.siteTagline}</h3>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
