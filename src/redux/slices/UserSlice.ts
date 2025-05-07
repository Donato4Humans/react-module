import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllResources} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUser[]
}
const initUserSliceState: UserSliceType = { users: [] };


const loadUsers = createAsyncThunk(
    "loadUsers",
    async (_, thunkAPI) => {
        try {
            const users = await getAllResources<IUser[]>('/users');
            return thunkAPI.fulfillWithValue(users);
        }catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
        .addCase(loadUsers.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })
});

export const userSliceActions = {...userSlice.actions, loadUsers };