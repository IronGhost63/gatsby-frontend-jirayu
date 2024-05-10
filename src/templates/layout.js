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
      <div className="bg-gray-100">
        <Link to="/"><h1 className="text-xl">{data?.site.siteMetadata.title}</h1></Link>
        <h3 className="text-lg">{data?.site.siteMetadata.siteTagline}</h3>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
