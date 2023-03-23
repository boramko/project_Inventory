import { configureStore, getDefaultMiddleware, serializableCheck } from '@reduxjs/toolkit';
import tokenReducer from '../redux/Auth';
import userReducer from '../redux/user'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const reducers = combineReducers({
    authToken: tokenReducer,
    user: userReducer
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(thunkMiddleware),
});

axios.interceptors.request.use(function (config) {
    const { authToken } = store.getState();
    const headers = {
        'Authorization': `${authToken.accessToken}`,
        'Content-Type': 'application/json'
    };
    config.headers = headers;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default store;