export interface GetGroupsResponse {
    result: 1 | 0;
    data?: Group[];
}

export interface Group {
    id: number;
    name: string;
    closed: boolean;
    avatar_color?: string;
    members_count: number;
    friends?: User[];
}

export interface User {
    first_name: string;
    last_name: string;
}

export enum TypeFilter {
    ALL,
    OPEN,
    CLOSE,
}

export enum AvatarColorFilter {
    ALL = "",
    WHITE = "white",
    BLUE = "blue",
    RED = "red",
    PURPLE = "purple",
    ORANGE = "orange",
    YELLOW = "yellow",
    GREEN = "green",
}

export enum FriendsFilter {
    ALL,
    HAS_FRIENDS,
    NO_FRIENDS,
}
