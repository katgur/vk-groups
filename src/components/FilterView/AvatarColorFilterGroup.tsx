import { FormItem, CustomSelect } from "@vkontakte/vkui";
import {
    AvatarColorFilter,
    FilterUtil,
    GroupAvatarColor,
} from "../../types/groups";
import useFilters from "../../hooks/useFilters";
import { ChangeEvent } from "react";
import { isAvatarColorFilter } from "../../types/typeGuards";

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
        case GroupAvatarColor.NONE:
            return "Нет";
        case FilterUtil.ALL:
            return "Любой";
        default:
            return "";
    }
};

function AvatarColorFormItem() {
    const filters = useFilters();

    return (
        <FormItem top="Цвет аватара">
            <CustomSelect
                id="avatar"
                placeholder="Не выбран"
                defaultValue={filters.values.avatarColor}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    if (!isAvatarColorFilter(e.target.value)) {
                        return;
                    }
                    filters.setAvatarColorFilter(e.target.value);
                }}
                options={[
                    FilterUtil.ALL,
                    ...Object.values(GroupAvatarColor),
                ].map((avatarColor) => ({
                    label: avatarColorMap(avatarColor),
                    value: avatarColor,
                }))}
            />
        </FormItem>
    );
}

export default AvatarColorFormItem;
