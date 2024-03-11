import { Group, Header, Panel, ScreenSpinner, View } from "@vkontakte/vkui";
import useGroups from "../../hooks/useGroups";
import GroupCard from "./GroupCard";

function GroupListView() {
    const groups = useGroups();

    if (!groups) {
        return <ScreenSpinner />;
    }

    return (
        <View activePanel="list">
            <Panel id="list">
                <Group header={<Header mode="secondary">Список групп</Header>}>
                    {groups.map((group) => (
                        <GroupCard key={group.id} {...group} />
                    ))}
                </Group>
            </Panel>
        </View>
    );
}

export default GroupListView;
