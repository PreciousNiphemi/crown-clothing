import {createStore, applyMiddleware} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
const persistConfig ={
    key:'root',
    storage,
    whitelist: 'cart'

}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [logger];

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
export default {store, persistor} ;