import {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllResources} from "../../services/api.service.ts";

type PostSliceType = {
    posts: IPost[]
}
const initPostSliceState: PostSliceType = { posts: [] };


const loadPosts = createAsyncThunk(
    "loadPosts",
    async (_, thunkAPI) => {
        try {
            const posts = await getAllResources<IPost[]>('/posts');
            return thunkAPI.fulfillWithValue(posts);
        }catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        })
        .addCase(loadPosts.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })
});

export const postSliceActions = {...postSlice.actions, loadPosts };