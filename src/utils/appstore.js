import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import seachsuggestionslice from "./seachsuggestionslice";


const appstore = configureStore(
    {
        reducer :
         {
            app : appSlice,
            search : seachsuggestionslice,
         }

    }
);
export default appstore ;