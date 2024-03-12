import { action, makeObservable, observable, runInAction } from "mobx";
import { FilterUtil, Filters, GroupForClient } from "../../types/groups";
import api from "../../services/mock/groups";
import Store from "..";
import { mapGroupForClient } from "../../types/map";
import { Pagination } from "../../types/pagination";

class GroupStore {
    store: Store;
    all: GroupForClient[] | null;
    filtered: GroupForClient[] | null;
    current: GroupForClient[] | null;

    constructor(store: Store) {
        makeObservable(this, {
            all: observable,
            filtered: observable,
            current: observable,
            fetchAll: action,
            applyFilters: action,
            applyPagination: action,
        });
        this.store = store;
        this.all = null;
        this.filtered = null;
        this.current = null;
    }

    fetchAll() {
        api.getGroups()
            .then((response) => {
                if (!response.result) {
                    throw new Error("Bad result in response");
                }
                if (!response.data) {
                    throw new Error("No data in response");
                }
                const data = response.data.map(mapGroupForClient);
                runInAction(() => {
                    this.all = [...data];
                    this.filtered = [...data];
                    this.current = data.slice(
                        0,
                        this.store.pagination.value.limit
                    );
                });
            })
            .catch((error) => {
                this.store.error.setError({
                    message: error.message,
                    tryAgain: () => this.fetchAll(),
                });
            });
    }

    applyFilters(filters: Filters) {
        runInAction(() => {
            if (!this.all) {
                return;
            }
            this.filtered = this.all.filter((group) =>
                Object.entries(filters).every(
                    ([key, filter]) =>
                        filter === FilterUtil.ALL ||
                        group[key as keyof GroupForClient] === filter
                )
            );
        });
    }

    applyPagination(pagination: Pagination) {
        runInAction(() => {
            if (!this.filtered) {
                return;
            }
            this.current = this.filtered.slice(
                pagination.skip,
                pagination.skip + pagination.limit
            );
        });
    }
}

export default GroupStore;
