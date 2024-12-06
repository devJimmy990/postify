'use client'
import { addPost, updatePost } from '@/redux/slices/PostSlice';
import { RootState } from '@/redux/store';
import { memo, FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

type FormModel = {
    title: string;
    body: string;
};


const PostForm: FC = () => {
    const dispatch = useDispatch();
    const active = useSelector((state: RootState) => state.post.active);

    const { register, handleSubmit, reset } = useForm<FormModel>({
        defaultValues: {
            title: '',
            body: '',
        },
    });
    // Update the form when the `post` prop changes
    useEffect(() => {
        if (active.id) {
            reset({
                title: active.title,
                body: active.body,
            });
        }
    }, [active, reset]);

    // Handle form submission
    const onFormSubmit = (data: FormModel) => {
        /**
         * id: number,
    userId: number,
    title: string,
    body: string,
         */
        if (active.id) {
            dispatch(updatePost({ ...active, ...data }))
        } else {
            dispatch(addPost(data))
        }
        // onSubmit(data);
        console.log(data)
        reset(); // Clear the form after submission
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            <h2 className="text-xl font-bold">{active.id ? 'Edit Post' : 'Add New Post'}</h2>
            <div>
                <label className="block">Title</label>
                <input
                    placeholder='enter your post title...'
                    className="w-full outline-none border rounded p-2 text-black"
                    {...register('title', { required: 'Title is required' })}
                />
            </div>
            <div>
                <label className="block">Body</label>
                <textarea
                    rows={4} placeholder='enter post body...'
                    {...register('body', { required: 'Body is required' })}
                    className="w-full outline-none border rounded p-2 text-black resize-none"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                {active.id ? 'Update Post' : 'Add Post'}
            </button>
        </form>
    );
};

export default memo(PostForm);
