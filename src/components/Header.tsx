'use client';
import { FC, memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';

type HeaderProps = {
    onSearch: (query: string) => void;
}

const Header: FC<HeaderProps> = ({ onSearch }) => {
    const { register, reset } = useForm<{ query: string }>({ defaultValues: { query: '' }, });

    const clearSearchQuery = useCallback(() => { reset(); onSearch(''); }, [reset, onSearch]);


    const debounce = useCallback((value: string) => {
        let timeoutId: NodeJS.Timeout | null = null;
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => onSearch(value), 300);
    }, [onSearch]);


    return (
        <header className="w-full bg-gray-950">
            <div className="w-5/12 relative border rounded-xl bg-gray-800">
                <input
                    className="w-full bg-transparent border-0 outline-0 py-2 px-2 pr-16 text-white"
                    placeholder="search posts by title..."
                    {...register('query', { required: 'Title is required' })}
                    onChange={({ target: { value } }) => debounce(value)}
                />
                <button
                    className="absolute right-0 top-0 mt-2 mr-2 text-gray-400 hover:text-white"
                    onClick={clearSearchQuery}
                >
                    Clear
                </button>
            </div>
        </header>
    );
};

export default memo(Header);
