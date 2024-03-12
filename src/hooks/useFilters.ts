import { useContext } from "react";
import GroupContext from "../context/GroupContext";

function useFilters() {
    const context = useContext(GroupContext);
    if (!context) {
        throw new Error("ContextProvider is not specified");
    }
    return context.filters;
}

export default useFilters;
