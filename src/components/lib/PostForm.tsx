'use client'
import { RootState } from '@/redux/store';
import { useForm } from 'react-hook-form';
import { memo, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, resetActive, updatePost } from '@/redux/slices/PostSlice';

type FormModel = { title: string; body: string; };


const PostForm: FC = () => {
    const dispatch = useDispatch();
    const active = useSelector((state: RootState) => state.post.active);
    const { register, handleSubmit, reset } = useForm<FormModel>({ defaultValues: { title: '', body: '', }, });

    useEffect(() => {
        console.log("change in active post and current is: ");
        if (active.id) { console.log(active); reset({ title: active.title, body: active.body, }); }
        else { console.log("empty"); reset({ title: '', body: '', }); }
    }, [active, reset]);

    // Handle form submission
    const onFormSubmit = (data: FormModel) => {
        if (active.id) { dispatch(updatePost({ ...active, ...data })) }
        else { dispatch(addPost(data)) }

        reset();
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} onReset={() => dispatch(resetActive())} className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{active.id ? 'Edit Post' : 'Add New Post'}</h2>
            </div>

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
            <div className="flex justify-center space-x-4">
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    {active.id ? 'Update Post' : 'Add Post'}
                </button>

                <button disabled={active.id ? true : false} type='reset' className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                    Reset
                </button>

            </div>
        </form>
    );
};

export default memo(PostForm);
