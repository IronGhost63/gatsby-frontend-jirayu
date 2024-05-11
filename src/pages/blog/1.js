import * as React from "react";
import { navigate } from "gatsby";
import { useEffect } from "react";

const BlogFirstPage = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return (<></>)
}

export default BlogFirstPage
