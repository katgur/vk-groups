import { useContext } from "react";
import GroupContext from "../context/GroupContext";
import {
    AvatarColorFilter,
    HasFriendsFilter,
    TypeFilter,
} from "../types/groups";

function useFilters() {
    const context = useContext(GroupContext);
    if (!context) {
        throw new Error("ContextProvider is not specified");
    }
    return {
        filters: context.filters,
        setTypeFilter: (filter: TypeFilter) =>
            context.dispatch({ type: "SET_TYPE", payload: filter }),
        setAvatarColorFilter: (filter: AvatarColorFilter) =>
            context.dispatch({ type: "SET_AVATAR_COLOR", payload: filter }),
        setHasFriendsFilter: (filter: HasFriendsFilter) =>
            context.dispatch({ type: "SET_HAS_FRIENDS", payload: filter }),
    };
}

export default useFilters;
