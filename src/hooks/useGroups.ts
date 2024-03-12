import { useContext } from "react";
import GroupContext from "../context/GroupContext";

function useGroups() {
    const context = useContext(GroupContext);
    if (!context) {
        throw new Error("ContextProvider is not specified");
    }
    return context.groups;
}

export default useGroups;
