import { useContext } from "react";
import GroupContext from "../context/GroupContext";

function useGroups() {
    const context = useContext(GroupContext);
    if (!context) {
        throw new Error("ContextProvider is not specified");
    }
    return {
        pagination: context.pagination,
        setPage: (page: number) =>
            context.dispatch({ type: "SET_PAGE", payload: page }),
    };
}

export default useGroups;
