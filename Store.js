
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Cart'
//import cartSlice  from './Cart';
export default configureStore({
   reducer: {
      user: cartReducer
   },
},
);
