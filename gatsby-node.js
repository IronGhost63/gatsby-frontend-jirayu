const path = require(`path`);
const { siteMetadata } = require('./gatsby-config.js');

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const blogPostTemplate = path.resolve('src/templates/blogPost.js');
  const indexTemplate = path.resolve('src/templates/index.js');
  const pagedTemplate = path.resolve('src/templates/blogPaged.js');

  return graphql(`
    query getPosts {
      allWpPost {
        nodes {
          id
          slug
          title
          date
          content
          featuredImage {
            node {
              uri
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Page for each blog entry
    result.data.allWpPost.nodes.forEach(item => {
      createPage({
        // Path for this page — required
        path: `${item.slug}`,
        component: blogPostTemplate,
        context: {
          title: item.title,
          date: item.date,
          content: item.content,
        },
      })
    });

    const totalPages = Math.ceil(result.data.allWpPost.nodes.length / siteMetadata.postsPerPage);

    // Frontpage
    createPage({
      path: '/',
      component: indexTemplate,
      context: {
        postsPerPage: siteMetadata.postsPerPage,
        totalPages,
        items: result.data.allWpPost.nodes.slice(0, siteMetadata.postsPerPage),
      }
    });

    // Blog pagination
    Array.from({ length: totalPages }).forEach((_, i) => {
      if ( i === 0 ) {
        return;
      }

      i++;

      const itemStart = ((i-1) * siteMetadata.postsPerPage);
      const itemEnd = siteMetadata.postsPerPage * i;

      createPage({
        path: `/blog/${i}`,
        component: pagedTemplate,
        context: {
          totalPages,
          currentPage: i,
          items: result.data.allWpPost.nodes.slice(itemStart, itemEnd),
        },
      });
    });
  });
}
