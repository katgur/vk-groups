import { useContext } from "react";
import { Context } from "../context/Context";

function useError() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("ContextProvider is not specified");
    }
    return context.error;
}

export default useError;
