import { Avatar, Button, Card, Popover, SimpleCell } from "@vkontakte/vkui";
import { GroupForClient, GroupType } from "../../types/groups";

function GroupCard(group: GroupForClient) {
    return (
        <SimpleCell
            before={
                <Avatar
                    size={48}
                    gradientColor="custom"
                    style={{
                        background: `linear-gradient(-45deg, color-mix(in lch, ${group.avatarColor}, gray), ${group.avatarColor})`,
                    }}
                />
            }
            subtitle={`${group.membersCount} members`}
            subhead={`${group.type === GroupType.CLOSED ? "Закрытая" : "Открытая"} группа`}
            after={
                <>
                    {group.friends && (
                        <Popover
                            zIndex={100}
                            trigger="click"
                            content={
                                <Card mode="shadow">
                                    {group.friends.map((friend) => (
                                        <SimpleCell
                                            key={`${friend.first_name}${friend.last_name}`}
                                            before={
                                                <Avatar
                                                    size={32}
                                                    src="https://pp.userapi.com/60tZWMo4SmwcploUVl9XEt8ufnTTvDUmQ6Bj1g/mmv1pcj63C4.png"
                                                />
                                            }
                                            subtitle={`${friend.first_name} ${friend.last_name}`}
                                        ></SimpleCell>
                                    ))}
                                </Card>
                            }
                        >
                            <Button mode="secondary">
                                {`${group.friends?.length || 0} friends`}
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
