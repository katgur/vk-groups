import { FormItem, RadioGroup, Radio } from "@vkontakte/vkui";
import { FilterUtil, GroupType, TypeFilter } from "../../types/groups";
import useFilters from "../../hooks/useFilters";

const typeMap = (type: TypeFilter) => {
    switch (type) {
        case GroupType.CLOSED:
            return "Закрытая";
        case GroupType.OPEN:
            return "Открытая";
        case FilterUtil.ALL:
            return "Любой";
        default:
            return;
    }
};

function TypeFilterFormItem() {
    const { filters, setTypeFilter } = useFilters();

    return (
        <FormItem top="Тип">
            <RadioGroup>
                {[FilterUtil.ALL, ...Object.values(GroupType)].map(
                    (type, index) => (
                        <Radio
                            key={index}
                            defaultChecked={filters.type === type}
                            name="type"
                            value={type}
                            onChange={() => setTypeFilter(type)}
                        >
                            {typeMap(type)}
                        </Radio>
                    )
                )}
            </RadioGroup>
        </FormItem>
    );
}

export default TypeFilterFormItem;
