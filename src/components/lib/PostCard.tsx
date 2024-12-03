import PostType from '@/types/post';
import { memo, FC } from 'react';

const PostCard: FC<PostType> = (post: PostType) => {
    return (
        <div>
            <h2>{post.id}</h2>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}

export default memo(PostCard);
