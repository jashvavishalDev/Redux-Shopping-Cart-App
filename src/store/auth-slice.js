import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {  state.isLoggedIn = true},
        logout(state) { state.isLoggedIn = false},
    }
});

export const authActions= authSlice.actions; // 1 - Actions

export default authSlice;
