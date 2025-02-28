import {configureStore} from "@reduxjs/toolkit";
import FieldsSlice from "../reducers/FieldsSlice.ts";
import UserSlice from "../reducers/UserSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import StaffsSlice from "../reducers/StaffsSlice.ts";

export const store = configureStore({
   reducer: {
       fields: FieldsSlice,
       crops:CropSlice,
       vehicles:VehicleSlice,
       staffs:StaffsSlice,
       user: UserSlice
   }
});

export type AppDispatch = typeof store.dispatch;