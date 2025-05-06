import {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users: IUser[];
};

const initialState: UserSliceType = {users: []};

const loadUsers = createAsyncThunk( // HERE WE CREATE SPECIAL WRAPPER FOR ASYNC-METHODS
    'userSlice/loadUsers',
       async (_, thunkAPI) => {
           // WE HAVE MULTIPLE RESPONSE STATUSES INSIDE REDUX ASYNC WRAPPER: PENDING, FULFILLED, REJECTED
           // SO WE USE IN RETURN SPECIAL METHOD FOR EACH SPECIFIC RESPONSE STATUS

           try {
               const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
               return thunkAPI.fulfillWithValue(users);
           }catch(err) {
               console.error(err);
               return thunkAPI.rejectWithValue('Error loading users.'); // custom error or message from err-obj
           }
    }
);
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: { }, // reducers field is for sync actions
    extraReducers: (builder) => { // extraReducers for async actions
        // when response will be ready we will change state according to response status cases from asyncThunk wrapper
        builder.
            addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                    state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state);
                console.log(action); // inside this action will be value from thunkAPI.rejectWithValue() method from asyncThunk wrapper
            })
    }
});

export const userSliceActions = {
    ...userSlice.actions, loadUsers
};
