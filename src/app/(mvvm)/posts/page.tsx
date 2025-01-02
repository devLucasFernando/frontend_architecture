'use client'
import { usePostsModel } from "./posts-model"
import PostsView from "./posts-view"

const PostsPage = () => {
  const model = usePostsModel()
  console.log(model)
  return(<PostsView {...model} />)
}

export default PostsPage