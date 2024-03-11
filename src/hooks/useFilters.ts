import { useContext } from "react";
import { Context } from "../context/Context";

function useFilters() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("ContextProvider is not specified");
    }
    return context.filters;
}

export default useFilters;