import { useContext } from "react";
import GroupContext from "../context/GroupContext";

function useError() {
    const context = useContext(GroupContext);
    if (!context) {
        throw new Error("ContextProvider is not specified");
    }
    return context.error;
}

export default useError;
