import React from "react"

import Post from "./Post"

const PostList = ({removeUpdate, posts}) => {
  return (
    <div style={{marginTop: "20px"}}>
      {posts.map((item, i) => {
        return <Post post={item} key={i} onRemove={removeUpdate}/>
       })
      }
    </div>
  )
}

export default PostList