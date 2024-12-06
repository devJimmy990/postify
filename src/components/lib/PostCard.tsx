'use client';
import { removePost, setActivePost } from '@/redux/slices/PostSlice';
import PostType from '@/types/post';
import { memo, FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

const PostCard: FC<PostType> = (post: PostType) => {
    const dispatch = useDispatch();
    const onEdit = useCallback((post: PostType) => { dispatch(setActivePost(post)) }, [dispatch])
    const onDelete = useCallback((id: number) => { dispatch(removePost(id)) }, [dispatch])

    return (
        <div className="w-full bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.body}</p>
            <div className="flex justify-end space-x-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => onEdit(post)}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    onClick={() => onDelete(post.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default memo(PostCard);
