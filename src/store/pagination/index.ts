import { action, makeObservable, observable, runInAction } from "mobx";
import { Pagination } from "../../types/pagination";

class PaginationStore {
    value: Pagination;

    constructor() {
        makeObservable(this, {
            value: observable,
            setPage: action,
            setTotal: action,
        });
        this.value = {
            limit: 10,
            skip: 0,
        };
    }

    setPage(page: number) {
        runInAction(() => {
            this.value = {
                ...this.value,
                skip: this.value.limit * (page - 1),
            };
        });
    }

    setTotal(total?: number) {
        runInAction(() => {
            this.value = {
                ...this.value,
                total: total,
                skip: 0,
            };
        });
    }
}

export default PaginationStore;
