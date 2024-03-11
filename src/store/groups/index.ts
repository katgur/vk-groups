import { action, makeObservable, observable, runInAction } from "mobx";
import { FilterUtil, Filters, GroupForClient } from "../../types/groups";
import api from "../../services/mock/groups";
import Store from "..";
import { mapGroupForClient } from "../../types/map";

class GroupStore {
    store: Store;
    all: GroupForClient[] | null;
    filtered: GroupForClient[] | null;

    constructor(store: Store) {
        makeObservable(this, {
            all: observable,
            filtered: observable,
            fetchAll: action,
            apply: action,
        });
        this.store = store;
        this.all = null;
        this.filtered = null;
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
                const data = response.data;
                runInAction(() => {
                    this.all = data.map(mapGroupForClient);
                    this.filtered = data.map(mapGroupForClient);
                });
            })
            .catch((error) => {
                this.store.error.setError(error.message);
            });
    }

    apply(filters: Filters) {
        runInAction(() => {
            if (!this.all) {
                return;
            }
            this.filtered = this.all.filter((group) =>
                Object.entries(filters).every(
                    ([key, filter]) =>
                        filter === FilterUtil.ALL || group[key] === filter
                )
            );
        });
    }
}

export default GroupStore;
