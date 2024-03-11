import { FormLayoutGroup, FormItem, RadioGroup, Radio } from "@vkontakte/vkui";
import {
    AvatarColorFilter,
    FilterUtil,
    GroupAvatarColor,
} from "../../types/groups";
import FiltersStore from "../../store/filters";

const typeMap = (type: AvatarColorFilter) => {
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
        default:
            return "Любой";
    }
};

interface AvatarColorFilterProps {
    filters: FiltersStore;
}

function AvatarColorFilterGroup({ filters }: AvatarColorFilterProps) {
    return (
        <FormLayoutGroup>
            <FormItem top="Цвет аватара">
                <RadioGroup>
                    {[
                        FilterUtil.ALL,
                        ...Object.values(GroupAvatarColor)
                    ].map((avatarColor, index) => (
                        <Radio
                            key={index}
                            defaultChecked={
                                filters.values.avatarColor === avatarColor
                            }
                            name="type"
                            value={avatarColor}
                            onChange={() => {
                                filters.setAvatarColorFilter(avatarColor);
                            }}
                        >
                            {typeMap(avatarColor)}
                        </Radio>
                    ))}
                </RadioGroup>
            </FormItem>
        </FormLayoutGroup>
    );
}

export default AvatarColorFilterGroup;
