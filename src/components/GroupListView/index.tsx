import { Group, Header, Panel, ScreenSpinner, View } from "@vkontakte/vkui";
import useGroups from "../../hooks/useGroups";
import GroupCell from "./GroupCell";
import PaginationGroup from "./PaginationGroup";

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
                        <GroupCell key={group.id} {...group} />
                    ))}
                </Group>
                <PaginationGroup />
            </Panel>
        </View>
    );
}

export default GroupListView;
