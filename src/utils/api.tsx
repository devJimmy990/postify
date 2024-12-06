import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getPostsRequest = createAsyncThunk("posts/getPosts", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
});

const addPostRequest = createAsyncThunk("posts/addPost", async (postInfo) => {
    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postInfo
    );
    return response.data;
});

const deletePostRequest = createAsyncThunk(
    "posts/deletePost",
    async (postId) => {
        const response = await axios.delete(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        return response.data;
    }
);

export { getPostsRequest, addPostRequest, deletePostRequest };