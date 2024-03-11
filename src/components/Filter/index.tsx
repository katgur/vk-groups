import {
    Group,
    Panel,
    View,
} from "@vkontakte/vkui";
import useFilters from "../../hooks/useFilters";
import TypeFilterGroup from "./TypeFilterGroup";

function Filter() {
    const filters = useFilters();

    return (
        <View activePanel="filter">
            <Panel id="filter">
                <Group>
                    <TypeFilterGroup filters={filters} />
                </Group>
            </Panel>
        </View>
    );
}

export default Filter;
