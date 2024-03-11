import { observer } from "mobx-react-lite";
import { ReactNode, createContext, useEffect } from "react";
import Store from "../store";
import { GroupForClient } from "../types/groups";
import FiltersStore from "../store/filters";
import { ErrorInfo } from "../types/error";

interface ContextInterface {
    error: ErrorInfo | null;
    groups: GroupForClient[] | null;
    filters: FiltersStore;
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
                value={{
                    error: store.error.info,
                    groups: store.groups.filtered,
                    filters: store.filters,
                }}
            >
                {children}
            </Context.Provider>
        );
    }
);

export default ContextProvider;
