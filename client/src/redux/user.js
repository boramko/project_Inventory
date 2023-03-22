import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "userState",
    initialState: null,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    },
});

export default userSlice.reducer;