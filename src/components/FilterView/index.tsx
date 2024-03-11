import { FormLayoutGroup, Group, Header, Panel, View } from "@vkontakte/vkui";
import TypeFilterFormItem from "./TypeFilterFormItem";
import AvatarColorFormItem from "./AvatarColorFilterGroup";
import HasFriendFilterFormItem from "./HasFriendsFilterGroup";

function FilterView() {
    return (
        <View activePanel="filter">
            <Panel id="filter">
                <Group header={<Header mode="secondary">Фильтры</Header>}>
                    <FormLayoutGroup>
                        <TypeFilterFormItem />
                        <AvatarColorFormItem />
                        <HasFriendFilterFormItem />
                    </FormLayoutGroup>
                </Group>
            </Panel>
        </View>
    );
}

export default FilterView;
