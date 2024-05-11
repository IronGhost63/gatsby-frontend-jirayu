import * as React from "react";
import { Link } from "gatsby";
import Layout from "../templates/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="container max-w-screen-sm mx-auto text-center">
        <h1 className="text-4xl text-gray-800">Page Not Found</h1>
        <p><Link to="/">Back to homepage</Link></p>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
