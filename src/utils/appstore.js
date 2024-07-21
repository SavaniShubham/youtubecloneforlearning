import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import seachsuggestionslice from "./seachsuggestionslice";

import chatSlice from "./chatSlice";


const appstore = configureStore(
    {
        reducer :
         {
            app : appSlice,
            search : seachsuggestionslice,  
            chat:chatSlice,
         }

    }
);
export default appstore ;