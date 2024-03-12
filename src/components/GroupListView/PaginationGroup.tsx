import { Group, Pagination } from "@vkontakte/vkui";
import usePagination from "../../hooks/usePagination";

function PaginationGroup() {
    const pagination = usePagination();

    const { limit, skip, total } = pagination.value;

    if (!total) {
        return;
    }

    return (
        <Group className="center">
            <Pagination
                currentPage={Math.floor(skip / limit) + 1}
                totalPages={Math.ceil(total / limit)}
                onChange={(page) => pagination.setPage(page)}
            />
        </Group>
    );
}

export default PaginationGroup;
