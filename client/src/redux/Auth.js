import { createSlice, extraReducers } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 600*1000;

export const tokenSlice = createSlice({
    name: 'authToken',
    initialState: {
        authenticated: false,
        accessToken: null,
        expireTime: null
    },
    reducers: {
        DELETE_TOKEN:(state) => {
            state.authenticated = false;
            state.accessToken = null;
            state.expireTime = null;
        },
        SET_TOKEN: (state, action) => {
            state.authenticated = true;
            state.accessToken = action.payload;
            state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
        },
        // DELETE_TOKEN: (state) => {
        //     state.authenticated = false;
        //     state.accessToken = null;
        //     state.expireTime = null
        // },
    },
    //extraReducers를 사용하여 SET_TOKEN 액션의 리듀서 함수를 확장
    extraReducers: (builder) => {
        builder.addMatcher(
          (action) => action.type.endsWith('_FULFILLED'),
          (state) => {
            const expireTime = new Date().getTime() + TOKEN_TIME_OUT;
            return { ...state, expireTime };
          }
        );
    },
});

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;