'use client';
import PostCard from './lib/PostCard';
import PostType from '@/types/post';
import { RootState } from '@/redux/store';
import { memo, FC, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMorePosts, startLoading } from '@/redux/slices/PostSlice';
import SkeletonPostCard from './lib/SkeletonPostCard';

const PostsList: FC<{ posts: PostType[], canLoad: boolean }> = ({ posts, canLoad }) => {


    const interceptor = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch()
    const { loading } = useSelector((state: RootState) => state.post);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && canLoad && !loading) {
                    dispatch(startLoading());
                    setTimeout(() => { dispatch(loadMorePosts()) }, 2000);
                }
            },
        );

        const target = interceptor.current;
        if (target) observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, [dispatch, canLoad, loading]);

    return (
        <div className='w-full h-[80vh] flex flex-col items-center justify-start overflow-y-auto pr-5'>
            {posts.map((post) => (
                <PostCard key={post.id} {...post} />
            ))}
            {loading && Array.from({ length: 5 }).map((_, i) => <SkeletonPostCard key={i} />)}
            <div id="interceptor" ref={interceptor} className="h-8 w-full invisible" >sds</div>
        </div>
    );
};

export default memo(PostsList);
