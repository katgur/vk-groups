import { Group, Header, Panel, ScreenSpinner, View } from "@vkontakte/vkui";
import useGroups from "../../hooks/useGroups";
import GroupCard from "./GroupCard";
import useError from "../../hooks/useError";

function GroupList() {
    const groups = useGroups();
    const error = useError();

    if (error) {
        return;
    }

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

export default GroupList;
