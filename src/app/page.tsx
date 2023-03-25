import Image from 'next/image';
import { client, urlFor } from '../lib/client';
import PostsSection from '@/components/posts/PostsSection';

export interface PostInterface {
  _id: string;
  header: string;
  title: string;
  text: string;
  image: string;
  hashtags: string;
  slug: {
    current: string;
  };
};


async function getPost(): Promise<PostInterface[]> {
  const res: PostInterface[] = await client.fetch('*[_type == "post"]');
  return res;
}

export default async function Post(): Promise<JSX.Element> {
  const posts: PostInterface[] = await getPost();

  return (
    <div className='w-[80%] m-auto '>
        <PostsSection posts={posts} />
    </div>
  );
}
