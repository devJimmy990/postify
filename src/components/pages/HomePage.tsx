'use client';
import PostType from "@/types/post";
import Header from "@components/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PostsList from "@components/PostsList";
import PostForm from "@components/lib/PostForm";
import { useState, FC, memo, useMemo, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import Modal from "@components/lib/Modal";
import { resetActive } from "@/redux/slices/PostSlice";

const HomePage: FC = () => {
    const dispatch = useDispatch();
    const { active, posts } = useSelector((state: RootState) => state.post);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [openModal, setOpenModal] = useState(false);

    console.log(posts.length);
    const finalPosts = useMemo(() =>
        posts.filter((post: PostType) => post.title.toLowerCase().includes(searchQuery.toLowerCase())
        ), [posts, searchQuery]);

    useEffect(() => { if (active.id) { setOpenModal(true) } }, [active]);

    return (
        <div className="w-full h-full flex flex-1 gap-4 xl:gap-16 font-[var(--font-geist-sans)]">
            <div className="w-1/4 hidden lg:block">
                <PostForm />
            </div>

            <div className="w-full lg:w-3/4 h-full flex flex-col items-center gap-4 relative">
                <Header onSearch={(query) => setSearchQuery(query)} />
                <PostsList posts={finalPosts} canLoad={!searchQuery} />

                <button
                    onClick={() => { setOpenModal(true) }}
                    className="w-10 h-10 flex items-center justify-center lg:hidden absolute bottom-4 end-8 z-5 bg-blue-500 rounded-[50%] cursor-pointer"
                >
                    <MdAdd size={28} color={'#fff'} />
                </button>
            </div>

            <div className="lg:hidden ">
                <Modal
                    isOpen={openModal}
                    onClose={() => {
                        dispatch(resetActive());
                        setOpenModal(false);
                    }}
                >
                    <PostForm />
                </Modal>
            </div>
        </div>
    );
}

export default memo(HomePage);
