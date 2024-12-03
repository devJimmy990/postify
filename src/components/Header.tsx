'use client'
import { FC, memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';

const Header: FC = () => {
    const { register, reset } = useForm<{ query: string }>({
        defaultValues: { query: '', },
    });

    const clearSearchQuery = useCallback(() => reset(), [reset])
    return (
        <header className='w-full  bg-gray-950 '>
            <div className='w-5/12 relative border rounded-xl '>
                <input
                    className="w-full bg-transparent border-0 outline-0 py-2 px-2 pr-16"
                    placeholder='Search Posts By Title or Description...'
                    {...register('query', { required: 'Title is required' })}
                />
                <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-400" onClick={clearSearchQuery}>
                    Search
                </button>
            </div>
        </header>
    );
}

export default memo(Header);
