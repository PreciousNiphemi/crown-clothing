import {combineReducers} from 'redux';
// import {persistReducer} from 'redux-persist';
import shopReducer from './shop/shop.reducers';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';  
import directoryReducer from './directory/directory.reducer';
// import storage from 'redux-persist/lib/storage'



// const persistConfig ={
//     key: 'root',
//     storage,
//     whitelist:['cart']
// }

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});
// export default persistReducer(persistConfig, rootReducer);
