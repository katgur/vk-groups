import {
    Group,
    GroupAvatarColor,
    GroupForClient,
    GroupHasFriends,
    GroupType,
    User,
    UserForClient,
} from "./groups";

export function mapGroupForClient(group: Group): GroupForClient {
    return {
        id: group.id,
        name: group.name,
        type: group.closed ? GroupType.CLOSED : GroupType.OPEN,
        avatarColor: mapAvatarColorForClient(group.avatar_color),
        membersCount: group.members_count,
        friends: group.friends?.map(mapUserForClient) || [],
        hasFriends:
            group.friends && group.friends.length > 0
                ? GroupHasFriends.HAS_FRIENDS
                : GroupHasFriends.NO_FRIENDS,
    };
}

function mapAvatarColorForClient(avatarColor?: string): GroupAvatarColor {
    if (!avatarColor) {
        return GroupAvatarColor.NONE;
    }
    return avatarColor as GroupAvatarColor;
}

function mapUserForClient(user: User): UserForClient {
    return {
        name: `${user.first_name} ${user.last_name}`,
    };
}
