'use client'
import React, { FC, useState } from 'react';
import Link from 'next/link';
import PostCard from './PostCard';
import { PostInterface } from '../../app/page';
import Searchbar from '../searchbar/Searchbar';
import { data } from './sauny'
import { client } from '@/lib/client';

interface PostsSectionProps {
  posts?: PostInterface[];
}

const PostsSection: FC<PostsSectionProps> = ({ posts = [] }) => {
  const [numPostsDisplayed, setNumPostsDisplayed] = useState(6);
  const [showMore, setShowMore] = useState(true);
  const [category, setCategory] = useState('');

  const allCategories = Array.from(new Set(posts.map((post) => post.category)));
  const filteredPosts = category ? posts.filter((post) => post.category === category) : posts;

  const handleShowMore = () => {
    const remainingPosts = filteredPosts.slice(numPostsDisplayed);
    if (remainingPosts.length > 6) {
      setNumPostsDisplayed(numPostsDisplayed + 6);
    } else {
      setNumPostsDisplayed(numPostsDisplayed + remainingPosts.length);
      setShowMore(false); 
    }
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setNumPostsDisplayed(6);
    const filteredPosts = selectedCategory ? posts.filter((post) => post.category === selectedCategory) : posts;
    setShowMore(filteredPosts.length > 6);
  };

  async function uploadData() {
    for (const item of data) {
      const docId = item._id.toString();
      const existingDoc = await client.getDocument(docId);
      
      if (existingDoc) {
        await client.patch(docId)
          .set({
            name: item.Name,
            address: item.Address,
            website: item.Website,
            facebook: item.Facebook,
            coordinates: item.Coordinates
          })
          .commit();
      } else {
        await client.create({
          _id: docId,
          _type: 'saunas',
          name: item.Name,
          address: item.Address,
          website: item.Website,
          facebook: item.Facebook,
          coordinates: item.Coordinates
        });
      }
    }
  
    console.log('Data uploaded successfully!');
  }
  
  uploadData();
  
  return (
    <div>
      <Searchbar categories={allCategories} onCategoryChange={handleCategoryChange} />
      <div className="flex flex-row flex-wrap pt-[50px] justify-center items-center sm:items-start sm:justify-start">
        {filteredPosts.slice(0, numPostsDisplayed).map((post) => (
          <div key={post._id}>
            <Link href={`/post/${post.slug.current}`}>
              <PostCard post={post} />
            </Link>
          </div>
        ))}
      </div>
      {showMore && (
        <div className="w-[100%] flex justify-center items-center mt-[10px]">
          <button className="border-[1px] border-orange-400 p-[10px] font-semibold hover:bg-orange-400 hover:text-white" onClick={handleShowMore}>
            Pokaż więcej
          </button>
        </div>
      )}
    </div>
  );
};

export default PostsSection;