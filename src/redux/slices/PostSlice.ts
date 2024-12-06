'use client';
import PostType from "@/types/post";
import { PostsData } from "@/data/posts";
import { createSlice } from "@reduxjs/toolkit";

// Async action to fetch posts



export const postSlice = createSlice({
    name: "posts",
    initialState: {
        page: 1,
        data: [...PostsData] as PostType[],
        active: {} as PostType,
        posts: PostsData.slice(0, 10) as PostType[],
        loading: false,
    },
    reducers: {

        addPost: (state, action) => {
            state.data.unshift(action.payload);
            state.posts.unshift(action.payload);
        },
        updatePost: (state, action) => {
            const temp: PostType = action.payload;
            state.data = state.data.map((post) =>
                post.id === temp.id ? temp : post
            );
            state.posts = state.posts.map((post) =>
                post.id === temp.id ? temp : post
            );
            state.active = {} as PostType;
        },
        removePost: (state, action) => {
            state.data = state.data.filter(({ id }) => id !== action.payload);
            state.posts = state.posts.filter(({ id }) => id !== action.payload);
        },

        setActivePost: (state, action) => {
            state.active = action.payload;
        },
        resetActive: (state) => { state.active = {} as PostType; },
        loadMorePosts: (state) => {
            state.posts = [...state.posts, ...state.data.slice(state.page * 10, (state.page + 1) * 10)];
            state.loading = false;
            state.page += 1;
        },
        startLoading: (state) => { state.loading = true; },
    },
});

export default postSlice.reducer;
export const {
    addPost,
    updatePost,
    removePost,
    setActivePost,
    loadMorePosts,
    startLoading,
    resetActive
} = postSlice.actions;
