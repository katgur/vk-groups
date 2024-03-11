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

export enum FilterUtil {
    ALL = "all",
}

export enum GroupType {
    OPEN = "open",
    CLOSED = "closed",
}

export enum GroupAvatarColor {
    NONE = "no",
    WHITE = "white",
    BLUE = "blue",
    RED = "red",
    PURPLE = "purple",
    ORANGE = "orange",
    YELLOW = "yellow",
    GREEN = "green",
}

export enum GroupHasFriends {
    HAS_FRIENDS = "has_friends",
    NO_FRIENDS = "no_friends",
}

export type TypeFilter = GroupType | FilterUtil;
export type AvatarColorFilter = GroupAvatarColor | FilterUtil;
export type HasFriendsFilter = GroupHasFriends | FilterUtil;

export type Filter = TypeFilter | AvatarColorFilter | HasFriendsFilter;

export interface UserForClient {
    name: string;
}

export interface GroupForClient {
    id: number;
    name: string;
    type: GroupType;
    avatarColor?: GroupAvatarColor;
    membersCount: number;
    hasFriends: GroupHasFriends;
    friends: UserForClient[];
}

export interface Filters {
    type: TypeFilter;
    avatarColor: AvatarColorFilter;
    hasFriends: HasFriendsFilter;
}
