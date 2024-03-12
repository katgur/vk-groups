import { autorun } from "mobx";
import ErrorStore from "./error";
import FiltersStore from "./filters";
import GroupStore from "./groups";
import PaginationStore from "./pagination";

class Store {
    groups: GroupStore;
    filters: FiltersStore;
    error: ErrorStore;
    pagination: PaginationStore;

    constructor() {
        this.groups = new GroupStore(this);
        this.filters = new FiltersStore();
        this.error = new ErrorStore();
        this.pagination = new PaginationStore();
        autorun(() => {
            this.groups.applyFilters(this.filters.values);
        });
        autorun(() => {
            this.groups.applyPagination(this.pagination.value);
        });
        autorun(() => {
            this.pagination.setTotal(this.groups.filtered?.length);
        });
    }
}

export default Store;
