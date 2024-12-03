import { PostsData } from '@/data/posts';
import { memo, FC } from 'react';
import PostCard from './lib/PostCard';

const PostsList: FC = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-start bg-green-600'>
            {PostsData.map((post) => (
                <PostCard key={post.id} {...post} />
            ))}
        </div>
    );
}

export default memo(PostsList);
