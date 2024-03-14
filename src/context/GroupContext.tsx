import {
    Dispatch,
    ReactNode,
    createContext,
    useCallback,
    useEffect,
    useReducer,
    useState,
} from "react";
import {
    AvatarColorFilter,
    FilterUtil,
    Filters,
    GroupForClient,
    HasFriendsFilter,
    TypeFilter,
} from "../types/groups";
import { mapGroupForClient } from "../types/map";
import api from "../services/mock/groups";
import { ErrorInfo } from "../types/error";
import { Pagination } from "../types/pagination";

interface Action {
    type: string;
    payload: unknown;
}

interface GroupsState {
    all: GroupForClient[] | null;
    filtered: GroupForClient[] | null;
    current: GroupForClient[] | null;
    pagination: Pagination;
    filters: Filters;
}

function applyFilters(state: GroupsState, filters: Filters): GroupsState {
    if (!state.all) {
        return state;
    }

    const filtered = state.all.filter((group) =>
        Object.entries(filters).every(
            ([key, filter]) =>
                filter === FilterUtil.ALL ||
                group[key as keyof GroupForClient] === filter
        )
    );

    return {
        ...state,
        filters,
        filtered,
        pagination: {
            ...state.pagination,
            total: filtered.length,
            skip: 0,
        },
        current: filtered.slice(0, state.pagination.limit),
    };
}

function groupsReducer(state: GroupsState, action: Action): GroupsState {
    switch (action.type) {
        case "SET_GROUPS": {
            const groups = action.payload as GroupForClient[];
            return {
                ...state,
                all: [...groups],
                filtered: [...groups],
                current: groups.slice(
                    state.pagination.skip,
                    state.pagination.limit
                ),
                pagination: {
                    ...state.pagination,
                    total: groups.length,
                    skip: 0,
                },
            };
        }
        case "SET_TYPE": {
            const type = action.payload as TypeFilter;
            const filters = {
                ...state.filters,
                type,
            };
            return applyFilters(state, filters);
        }
        case "SET_AVATAR_COLOR": {
            const avatarColor = action.payload as AvatarColorFilter;
            const filters = {
                ...state.filters,
                avatarColor,
            };
            return applyFilters(state, filters);
        }
        case "SET_HAS_FRIENDS": {
            const hasFriends = action.payload as HasFriendsFilter;
            const filters = {
                ...state.filters,
                hasFriends,
            };
            return applyFilters(state, filters);
        }
        case "SET_PAGE": {
            if (!state.filtered) {
                return state;
            }
            const page = action.payload as number;
            const pagination = {
                ...state.pagination,
                skip: state.pagination.limit * (page - 1),
            };
            return {
                ...state,
                pagination,
                current: state.filtered.slice(
                    pagination.skip,
                    pagination.skip + pagination.limit
                ),
            };
        }
        default:
            return state;
    }
}

interface ContextInterface {
    groups: GroupForClient[] | null;
    filters: Filters;
    pagination: Pagination;
    error: ErrorInfo | null;
    dispatch: Dispatch<Action>;
}

export const GroupContext = createContext<ContextInterface | null>(null);

interface ContextProviderProps {
    children: ReactNode;
}

export function GroupContextProvider({ children }: ContextProviderProps) {
    const [error, setError] = useState<string | null>(null);
    const [state, dispatch] = useReducer<typeof groupsReducer>(groupsReducer, {
        all: null,
        filtered: null,
        current: null,
        filters: {
            type: FilterUtil.ALL,
            avatarColor: FilterUtil.ALL,
            hasFriends: FilterUtil.ALL,
        },
        pagination: {
            limit: 10,
            skip: 0,
        },
    });

    const getGroups = useCallback(() => {
        api.getGroups()
            .then((response) => {
                if (!response.result) {
                    throw new Error("Bad result in response");
                }
                if (!response.data) {
                    throw new Error("No data in response");
                }
                dispatch({
                    type: "SET_GROUPS",
                    payload: response.data.map(mapGroupForClient),
                });
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [dispatch]);

    useEffect(() => {
        getGroups();
    }, [getGroups]);

    return (
        <GroupContext.Provider
            value={{
                groups: state?.current || null,
                filters: state.filters,
                pagination: state.pagination,
                error: error
                    ? {
                          message: error,
                          tryAgain: getGroups,
                      }
                    : null,
                dispatch,
            }}
        >
            {children}
        </GroupContext.Provider>
    );
}

export default GroupContext;
