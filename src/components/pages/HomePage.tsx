'use client';
import PostType from "@/types/post";
import Header from "@components/Header";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PostsList from "@components/PostsList";
import PostForm from "@components/lib/PostForm";
import { useState, FC, memo, useMemo } from "react";

const HomePage: FC = () => {
    // const posts = useSelector(({postsData: {posts}}) => posts);
    const posts = useSelector((state: RootState) => state.post.posts);
    const [searchQuery, setSearchQuery] = useState<string>('');

    console.log(posts.length)
    const finalPosts = useMemo(() =>
        posts.filter((post: PostType) => post.title.toLowerCase().includes(searchQuery.toLowerCase())
        ), [posts, searchQuery])


    return (
        <div className="w-full h-full flex flex-1 gap-16 font-[var(--font-geist-sans)]">
            <div className="w-1/4">
                <PostForm />
            </div>

            <div className="w-3/4 h-full flex flex-col items-center gap-4">
                <Header onSearch={(query) => setSearchQuery(query)} />
                <PostsList posts={finalPosts} canLoad={!searchQuery} />
            </div>
        </div>);
}

export default memo(HomePage);
