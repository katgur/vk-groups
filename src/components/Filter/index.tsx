import {
    Group,
    Panel,
    View,
} from "@vkontakte/vkui";
import TypeFilterGroup from "./TypeFilterGroup";
import AvatarColorFilterGroup from "./AvatarColorFilterGroup";
import HasFriendFilterGroup from "./HasFriendsFilterGroup";

function Filter() {
    return (
        <View activePanel="filter">
            <Panel id="filter">
                <Group>
                    <TypeFilterGroup />
                    <AvatarColorFilterGroup />
                    <HasFriendFilterGroup />
                </Group>
            </Panel>
        </View>
    );
}

export default Filter;
