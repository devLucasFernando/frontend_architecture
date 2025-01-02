import React, { PropsWithChildren } from 'react'
import { usePostsModel } from './posts-model'

type PostsViewProps = PropsWithChildren<ReturnType<typeof usePostsModel>>

const PostsView: React.FC<PostsViewProps> = (props) => {
  const { posts, isLoading, error } = props

  if (isLoading) return `Carregando ...`

  if (error) return `${error.message}`

  return (
    <ul className='flex flex-col gap-6 w-full items-center'>
      {posts?.map((todo) => (
        <li className="w-1/2 bg-white rounded-md border border-stone-700" key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default PostsView
