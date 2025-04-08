import {store} from "./store.ts";
import {Provider} from "react-redux";
import {FC, PropsWithChildren} from "react";

export const StoreProvider: FC<PropsWithChildren> = ({children}) => <Provider store={store}>{children}</Provider>;