import { autorun } from "mobx";
import ErrorStore from "./error";
import FiltersStore from "./filters";
import GroupStore from "./groups";

class Store {
    groups: GroupStore;
    filters: FiltersStore;
    error: ErrorStore;

    constructor() {
        this.groups = new GroupStore(this);
        this.filters = new FiltersStore();
        this.error = new ErrorStore();
        autorun(() => {
            this.groups.apply(this.filters.values);
        });
    }
}

export default Store;