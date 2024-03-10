import { observer } from "mobx-react-lite";
import { ReactNode, createContext, useEffect } from "react";
import Store from "../store";
import { Group } from "../types/groups";

interface ContextInterface {
    error: string | null;
    groups: Group[] | null;
}

export const Context = createContext<ContextInterface | null>(null);

interface ContextProviderProps {
    children: ReactNode;
    store: Store;
}

const ContextProvider = observer(
    ({ children, store }: ContextProviderProps) => {
        useEffect(() => {
            store.groups.fetchAll();
        }, [store.groups]);

        return (
            <Context.Provider
                value={{ error: store.error.message, groups: store.groups.filtered }}
            >
                {children}
            </Context.Provider>
        );
    }
);

export default ContextProvider;
