'use client'
import { memo, FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormModel = {
    title: string;
    body: string;
};

type PostFormProps = {
    post?: {
        id?: number;
        title: string;
        body: string;
    };
};

const PostForm: FC<PostFormProps> = ({ post }) => {
    const { register, handleSubmit, reset } = useForm<FormModel>({
        defaultValues: {
            title: '',
            body: '',
        },
    });

    // Update the form when the `post` prop changes
    useEffect(() => {
        if (post) {
            reset({
                title: post.title,
                body: post.body,
            });
        }
    }, [post, reset]);

    // Handle form submission
    const onFormSubmit = (data: FormModel) => {
        // onSubmit(data);
        console.log(data)
        reset(); // Clear the form after submission
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            <h2 className="text-xl font-bold">{post ? 'Edit Post' : 'Add New Post'}</h2>
            <div>
                <label className="block">Title</label>
                <input
                    className="border rounded w-full p-2"
                    {...register('title', { required: 'Title is required' })}
                />
            </div>
            <div>
                <label className="block">Body</label>
                <textarea
                    className="border rounded w-full p-2"
                    {...register('body', { required: 'Body is required' })}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                {post ? 'Update Post' : 'Add Post'}
            </button>
        </form>
    );
};

export default memo(PostForm);
