import ErrorStore from "./error";
import GroupStore from "./groups";

class Store {
    groups: GroupStore;
    error: ErrorStore;

    constructor() {
        this.groups = new GroupStore(this);
        this.error = new ErrorStore(this);
    }
}

export default Store;
