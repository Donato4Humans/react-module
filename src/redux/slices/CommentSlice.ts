import {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllResources} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[]
}
const initCommentSliceState: CommentSliceType = { comments: [] };


const loadComments = createAsyncThunk(
    "loadComments",
    async (_, thunkAPI) => {
        try {
            const comments = await getAllResources<IComment[]>('/comments');
            return thunkAPI.fulfillWithValue(comments);
        }catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
});

export const commentSliceActions = {...commentSlice.actions, loadComments };