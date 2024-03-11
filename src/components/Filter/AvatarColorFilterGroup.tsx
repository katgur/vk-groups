import { FormLayoutGroup, FormItem, RadioGroup, Radio } from "@vkontakte/vkui";
import {
    AvatarColorFilter,
    FilterUtil,
    GroupAvatarColor,
} from "../../types/groups";
import useFilters from "../../hooks/useFilters";

const avatarColorMap = (type: AvatarColorFilter) => {
    switch (type) {
        case GroupAvatarColor.BLUE:
            return "Синий";
        case GroupAvatarColor.GREEN:
            return "Зеленый";
        case GroupAvatarColor.ORANGE:
            return "Оранжевый";
        case GroupAvatarColor.PURPLE:
            return "Фиолетовый";
        case GroupAvatarColor.RED:
            return "Красный";
        case GroupAvatarColor.WHITE:
            return "Белый";
        case GroupAvatarColor.YELLOW:
            return "Желтый";
        case FilterUtil.ALL:
            return "Любой";
        default:
            return;
    }
};

function AvatarColorFilterGroup() {
    const filters = useFilters();

    return (
        <FormLayoutGroup>
            <FormItem top="Цвет аватара">
                <RadioGroup>
                    {[FilterUtil.ALL, ...Object.values(GroupAvatarColor)].map(
                        (avatarColor, index) => (
                            <Radio
                                key={index}
                                defaultChecked={
                                    filters.values.avatarColor === avatarColor
                                }
                                name="avatar"
                                value={avatarColor}
                                onChange={() => {
                                    filters.setAvatarColorFilter(avatarColor);
                                }}
                            >
                                {avatarColorMap(avatarColor)}
                            </Radio>
                        )
                    )}
                </RadioGroup>
            </FormItem>
        </FormLayoutGroup>
    );
}

export default AvatarColorFilterGroup;
