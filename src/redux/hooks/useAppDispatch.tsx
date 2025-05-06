import {useDispatch} from "react-redux";
import {store} from "../store.ts";

// TODO MAKE LIVE-TEMPLATE FOR CUSTOM USE-DISPATCH HOOK

// HERE WE CREATE CUSTOM HOOK FOR DISPATCH TO MAKE IT AUTO-TYPED
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();