import { FormLayoutGroup, FormItem, RadioGroup, Radio } from "@vkontakte/vkui";
import { FilterUtil, GroupType, TypeFilter } from "../../types/groups";
import FiltersStore from "../../store/filters";

const typeMap = (type: TypeFilter) => {
    switch (type) {
        case GroupType.CLOSED:
            return "Закрытая";
        case GroupType.OPEN:
            return "Открытая";
        case FilterUtil.ALL:
            return "Все";
        default:
            return;
    }
};

interface TypeFilterProps {
    filters: FiltersStore
}

function TypeFilterGroup({ filters }: TypeFilterProps) {
    return (
        <FormLayoutGroup>
            <FormItem top="Тип">
                <RadioGroup>
                    {[FilterUtil.ALL, GroupType.CLOSED, GroupType.OPEN].map(
                        (type, index) => (
                            <Radio
                                key={index}
                                defaultChecked={filters.values.type === type}
                                name="type"
                                value={type}
                                onChange={() => {
                                    filters.setTypeFilter(type);
                                }}
                            >
                                {typeMap(type)}
                            </Radio>
                        )
                    )}
                </RadioGroup>
            </FormItem>
        </FormLayoutGroup>
    );
}

export default TypeFilterGroup;
