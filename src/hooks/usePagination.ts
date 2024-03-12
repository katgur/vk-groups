import { useContext } from "react";
import { Context } from "../context/Context";

function useGroups() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("ContextProvider is not specified");
    }
    return context.pagination;
}

export default useGroups;
