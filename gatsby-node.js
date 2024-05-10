const path = require(`path`);
const { siteMetadata } = require('./gatsby-config.js');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
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

    // Frontpage
    createPage({
      path: '/',
      component: indexTemplate,
      context: {
        postsPerPage: siteMetadata.postsPerPage,
      }
    });

    // Blog pagination
    const totalPages = Math.ceil(result.data.allWpPost.nodes.length / siteMetadata.postsPerPage);
    Array.from({ length: totalPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: pagedTemplate,
        context: {
          postsPerPage: siteMetadata.postsPerPage,
          skip: i * siteMetadata.postsPerPage,
          totalPages,
          currentPage: i + 1,
        },
      });
    });
  });
}
