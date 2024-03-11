import { Group, GroupAvatarColor, GroupForClient, GroupHasFriends, GroupType } from "./groups";

export function mapGroupForClient(group: Group): GroupForClient {
    return {
        id: group.id,
        name: group.name,
        type: group.closed ? GroupType.CLOSED : GroupType.OPEN,
        avatarColor: mapAvatarColorForClient(group.avatar_color),
        membersCount: group.members_count,
        friends: group.friends,
        hasFriends: group.friends && group.friends.length > 0 ? GroupHasFriends.HAS_FRIENDS : GroupHasFriends.NO_FRIENDS,
    }
}

function mapAvatarColorForClient(avatarColor: string | undefined): GroupAvatarColor | undefined {
    if (!avatarColor) {
        return
    }
    return avatarColor as GroupAvatarColor;
}