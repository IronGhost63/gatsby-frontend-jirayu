const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/pages/templates/blogPost.js');

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

    // Create blog post pages.
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
    })
  })
}
