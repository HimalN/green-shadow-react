import {configureStore} from "@reduxjs/toolkit";
import FieldsSlice from "../reducers/FieldsSlice.ts";
import UserSlice from "../reducers/UserSlice.ts";

export const store = configureStore({
   reducer: {
       fields: FieldsSlice,
       user: UserSlice
   }
});

export type AppDispatch = typeof store.dispatch;