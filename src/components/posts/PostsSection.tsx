'use client'
import React, { FC, useState } from 'react';
import Link from 'next/link';
import PostCard from './PostCard';
import { PostInterface } from '../../app/page'

interface PostsSectionProps {
  posts?: PostInterface[];
}

const PostsSection: FC<PostsSectionProps> = ({ posts = [] }) => {
  const [numPostsDisplayed, setNumPostsDisplayed] = useState(6);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    if (numPostsDisplayed < posts.length) {
      setNumPostsDisplayed(numPostsDisplayed + 6);
      setShowMore(numPostsDisplayed + 6 < posts.length);
    } else {
      setShowMore(false);
    }
  };

  return (
    <div>
      <div className='flex flex-row flex-wrap'>
        {posts.slice(0, numPostsDisplayed).map((post) => (
          <div key={post._id}>
            <Link href={`/post/${post.slug.current}`}>
              <PostCard post={post} />
            </Link>
          </div>
        ))}
      </div>
      {showMore && (
        <div className='w-[100%] flex justify-center items-center mt-[10px]'>
          <button className='border-[1px] border-orange-300 p-[10px] font-semibold hover:bg-orange-300 hover:text-white' onClick={handleShowMore}>Pokaż więcej</button>
        </div>
      )}
    </div>
  );
};

export default PostsSection;
