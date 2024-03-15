import { Group, Pagination } from "@vkontakte/vkui";
import usePagination from "../../hooks/usePagination";

function PaginationGroup() {
    const { pagination, setPage } = usePagination();

    const { limit, skip, total } = pagination;

    if (!total) {
        return;
    }

    return (
        <Group className="center">
            <Pagination
                currentPage={Math.floor(skip / limit) + 1}
                totalPages={Math.ceil(total / limit)}
                onChange={setPage}
            />
        </Group>
    );
}

export default PaginationGroup;
