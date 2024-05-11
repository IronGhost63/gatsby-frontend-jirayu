import * as React from "react";
import { Link } from "gatsby";

const PostList = ({items, className}) => {
  return(
    <div className={className}>
      <ul>
        {items.map( (item) =>
          <li key={item.id}>
            <Link to={`/${item.slug}`} className="block mb-1 hover:bg-neutral-100 p-2">
              <h3 className="mb-1 text-lg">{item.title}</h3>
              <p className="text-gray-400 text-xs">{item.date}</p>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PostList;
