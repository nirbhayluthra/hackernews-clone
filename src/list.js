import React from "react";

const PostsList = ({ list }) => {
  return (
    <ul>
      {list.map((post, index) => {
        return (
          post?.title?.length && (
            <li>
              <a href={post.url} rel="noopener noreferrer" target="_blank">
                <h3>{`${index + 1}: ${post.title}`}</h3>
                {console.log(post)}
              </a>
              <h5 >Points:-{JSON.stringify(post.points)} Comments:- {JSON.stringify(post.num_comments)}</h5>
            </li>
          )
        );
      })}
    </ul>
  );
};


export default PostsList;
