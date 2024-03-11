import { Avatar, Button, Card, Popover, SimpleCell } from "@vkontakte/vkui";
import { GroupForClient, GroupHasFriends, GroupType } from "../../types/groups";
import { morphFriendsNumber, morphMembersNumber } from "../../utils/morpher";

const mapType = (type: GroupType) => {
    switch (type) {
        case GroupType.CLOSED:
            return "Закрытая группа";
        case GroupType.OPEN:
            return "Открытая группа";
        default:
            return;
    }
};

function GroupCard(group: GroupForClient) {
    return (
        <SimpleCell
            before={
                <Avatar
                    size={100}
                    gradientColor="custom"
                    style={{
                        background: `linear-gradient(-45deg, color-mix(in lch, ${group.avatarColor}, black 25%), ${group.avatarColor})`,
                    }}
                />
            }
            subtitle={morphMembersNumber(group.membersCount)}
            subhead={mapType(group.type)}
            after={
                <>
                    {group.hasFriends === GroupHasFriends.HAS_FRIENDS && (
                        <Popover
                            zIndex={100}
                            trigger="click"
                            content={
                                <Card mode="shadow">
                                    {group.friends.map((friend) => (
                                        <SimpleCell
                                            key={friend.name}
                                            before={
                                                <Avatar
                                                    size={32}
                                                    src="https://pp.userapi.com/60tZWMo4SmwcploUVl9XEt8ufnTTvDUmQ6Bj1g/mmv1pcj63C4.png"
                                                />
                                            }
                                            subtitle={friend.name}
                                        ></SimpleCell>
                                    ))}
                                </Card>
                            }
                        >
                            <Button mode="secondary">
                                {morphFriendsNumber(group.friends.length)}
                            </Button>
                        </Popover>
                    )}
                </>
            }
        >
            {group.name}
        </SimpleCell>
    );
}

export default GroupCard;
