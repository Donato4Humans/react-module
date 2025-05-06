import {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users: IUser[];
    user: IUser | null;
    loadState: boolean; // for example can be used to implement preloader while async method is working
};

const initialState: UserSliceType = {users: [], user: null, loadState: false};

const loadUsers = createAsyncThunk( // HERE WE CREATE SPECIAL WRAPPER FOR ASYNC-METHODS
    'userSlice/loadUsers',
       async (_, thunkAPI) => {
           // WE HAVE MULTIPLE RESPONSE STATUSES INSIDE REDUX ASYNC WRAPPER: PENDING, FULFILLED, REJECTED
           // SO WE USE IN RETURN SPECIAL METHOD FOR EACH SPECIFIC RESPONSE STATUS
           try {
               const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
               //thunkAPI.dispatch(userSliceActions.changeLoadState(true)); // after successful response we change loadState

               return thunkAPI.fulfillWithValue(users);
           }catch(err) {
               console.error(err);
               return thunkAPI.rejectWithValue('Error loading users.'); // custom error or message from err-obj
           }
    }
);

const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id: string, thunkAPI) => {
        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id).then(res => res.json());
            //thunkAPI.dispatch(userSliceActions.changeLoadState(true)); // after successful response we change loadState

            return thunkAPI.fulfillWithValue(user);
        }catch(err) {
            console.error(err);
            return thunkAPI.rejectWithValue('Error loading users.');
        }
    }
);

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: { // reducers field is for sync METHODS
        // WE CAN CALL SYNC METHODS FROM REDUCERS FROM ANY PLACE AND EVEN FROM WITHIN ASYNC-THUNK WRAPPERS FOR ASYNC METHODS
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: (builder) => { // extraReducers for async METHODS
        // when response will be ready we will change state according to response status cases from asyncThunk wrapper
        builder.
            addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                    state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state);
                console.log(action); // inside this action will be value from thunkAPI.rejectWithValue() method from asyncThunk wrapper
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
            })
            .addMatcher(isFulfilled(loadUsers, loadUser), (state) => {
                state.loadState = true; // HERE WE CHECK IF ASYNC METHODS WERE FULFILLED AND CHANGING STATE AUTOMATICALLY
                // TO AVOID MANUAL CHANGING IN EVERY NEEDED METHOD
            })
            // HERE INSIDE ADD-MATCHERS WE DO NOT USE ACTION ARGUMENT BECAUSE WE DONT NOW SPECIFIC TYPE THAT WAS RETURNED
                // BUT WE CAN SPECIFY IT DEPENDING ON RETURNED VALUE AND THEN DO SOMETHING FOR EACH TYPE
            .addMatcher(isRejected(loadUsers, loadUser), (state) => {
                console.error(state);
            })
    }
});

export const userSliceActions = {
    ...userSlice.actions, loadUsers, loadUser
};
