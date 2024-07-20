import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import seachsuggestionslice from "./seachsuggestionslice";
import commentdataslice from "./commentdataslice";
import chatSlice from "./chatSlice";


const appstore = configureStore(
    {
        reducer :
         {
            app : appSlice,
            search : seachsuggestionslice,
            comment: commentdataslice,
            chat:chatSlice,
         }

    }
);
export default appstore ;