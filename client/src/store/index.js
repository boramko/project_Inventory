import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../redux/Auth';
import userReducer from '../redux/user'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

// export default configureStore({
//     reducer: {
//         authToken: tokenReducer,
//         user: userReducer
//     },
// });

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
});
export default store;