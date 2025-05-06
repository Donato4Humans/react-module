import {useSelector} from "react-redux";
import {store} from "../store.ts";

// TODO MAKE LIVE-TEMPLATE FOR CUSTOM USE-SELECTOR HOOK

// HERE WE CREATE CUSTOM HOOK FOR AUTOMATIC STORE TYPIFICATION(IT WILL REMAKE TYPE AFTER EACH NEW SLICE ADDED)
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
