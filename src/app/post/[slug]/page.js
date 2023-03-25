import React from 'react'
import { client } from '../../../lib/client'
import PostCardDetails from '../../../components/posts/PostCardDetails'

async function getPosts () {
  const res = await client.fetch('*[_type == "post"]')
  return res
}

export async function generateStaticParams () {
  const posts = await getPosts()

  return posts?.map(c => ({
    slug: c.slug.current
  }))
}

export default async function PostPage ({ params }) {
  async function getSpecificPost () {
    const res = await client.fetch(`*[_type == "post" && slug.current == '${params.slug}'][0]`)
    return res
  }
  const post = await getSpecificPost()

  return (
    <div>
      <PostCardDetails posts={post} />
    </div>
  )
}
