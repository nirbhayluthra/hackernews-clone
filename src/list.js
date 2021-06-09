import React from "react";

const PostsList = ({ list }) => {
  return (
    <ul>
      {list.map((post, index) => {
        return (
          !!post?.title?.length && (
            <li key={post.created_at_i}>
              <a href={post.url} rel="noopener noreferrer" target="_blank">
                <h3>{`${index + 1}) ${post.title}`}</h3>
                {console.log(post)}
       
              </a>
              <h6 >{post.author} {JSON.stringify(post.num_comments)}</h6>
            </li>
          )
        );
      })}
    </ul>
  );
};


export default PostsList;
