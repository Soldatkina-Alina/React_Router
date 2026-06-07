import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    user: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,   
    reducers: {
        login : (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
        },
        logout : (state) => {
            state.user = null;
            state.isAuth = false;
        },
    },
});

export default authSlice.reducer;
export const {login, logout} = authSlice.actions;