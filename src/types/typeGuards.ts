import {
    AvatarColorFilter,
    FilterUtil,
    GetGroupsResponse,
    Group,
    GroupAvatarColor,
    User,
} from "./groups";

export function isAvatarColorFilter(
    unknownType: unknown
): unknownType is AvatarColorFilter {
    if (unknownType === FilterUtil.ALL) {
        return true;
    }
    return Object.values(GroupAvatarColor).includes(
        unknownType as GroupAvatarColor
    );
}

function isString(unknownType: unknown): unknownType is string {
    return typeof unknownType === "string" || unknownType instanceof String;
}

function isNumber(unknownType: unknown): unknownType is number {
    return typeof unknownType === "number" || unknownType instanceof Number;
}

function isBoolean(unknownType: unknown): unknownType is boolean {
    return typeof unknownType === "boolean" || unknownType instanceof Boolean;
}

function isArray(unknownType: unknown): unknownType is Array<unknown> {
    return unknownType instanceof Array && Array.isArray(unknownType);
}

function isUser(unknownType: unknown): unknownType is User {
    const user = unknownType as User;
    return isString(user.first_name) && isString(user.last_name);
}

function isFriendsArray(unknownType: unknown): unknownType is User[] {
    return isArray(unknownType) && unknownType.every(isUser);
}

function isGroup(unknownType: unknown): unknownType is Group {
    const group = unknownType as Group;
    return (
        isNumber(group.id) &&
        isString(group.name) &&
        isBoolean(group.closed) &&
        (group.avatar_color === undefined || isString(group.avatar_color)) &&
        isNumber(group.members_count) &&
        (group.friends === undefined || isFriendsArray(group.friends))
    );
}

function isGroupArray(unknownType: unknown): unknownType is Group[] {
    return isArray(unknownType) && unknownType.every(isGroup);
}

function isResult(unknownType: unknown): boolean {
    return unknownType === 0 || unknownType === 1;
}

export function isGetGroupResponse(
    unknownType: unknown
): unknownType is GetGroupsResponse {
    const getGroupResponse = unknownType as GetGroupsResponse;
    return (
        isResult(getGroupResponse.result) &&
        (getGroupResponse.data === undefined ||
            isGroupArray(getGroupResponse.data))
    );
}
