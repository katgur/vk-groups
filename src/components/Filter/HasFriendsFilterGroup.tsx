import { FormLayoutGroup, FormItem, RadioGroup, Radio } from "@vkontakte/vkui";
import {
    FilterUtil,
    GroupHasFriends,
    HasFriendsFilter,
} from "../../types/groups";
import useFilters from "../../hooks/useFilters";

const hasFriendsMap = (hasFriends: HasFriendsFilter) => {
    switch (hasFriends) {
        case GroupHasFriends.HAS_FRIENDS:
            return "Есть";
        case GroupHasFriends.NO_FRIENDS:
            return "Нет";
        case FilterUtil.ALL:
            return "Не имеет значения";
        default:
            return;
    }
};
function HasFriendFilterGroup() {
    const filters = useFilters();

    return (
        <FormLayoutGroup>
            <FormItem top="Друзья в группе">
                <RadioGroup>
                    {[FilterUtil.ALL, ...Object.values(GroupHasFriends)].map(
                        (hasFriends, index) => (
                            <Radio
                                key={index}
                                defaultChecked={
                                    filters.values.hasFriends === hasFriends
                                }
                                name="friends"
                                value={hasFriends}
                                onChange={() => {
                                    filters.setHasFriendsFilter(hasFriends);
                                }}
                            >
                                {hasFriendsMap(hasFriends)}
                            </Radio>
                        )
                    )}
                </RadioGroup>
            </FormItem>
        </FormLayoutGroup>
    );
}

export default HasFriendFilterGroup;
