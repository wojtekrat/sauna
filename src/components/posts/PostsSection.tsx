import React, { FC } from 'react';
import Link from 'next/link';
import PostCard from './PostCard';
import { PostInterface } from '../../app/page'

interface PostsSectionProps {
  posts?: PostInterface[];
}

const PostsSection: FC<PostsSectionProps> = ({ posts = [] }) => {
  return (
      <div className='flex flex-row items-center justify-center flex-wrap'>
        {posts.map((post) => (
          <div key={post._id}>
            <Link href={`/post/${post.slug.current}`}>
              <PostCard post={post} />
            </Link>
          </div>
        ))}
      </div>
  );
};

export default PostsSection;
