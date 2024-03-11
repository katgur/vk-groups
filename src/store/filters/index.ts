import { makeObservable, observable, runInAction } from "mobx";
import { FilterUtil, Filters, TypeFilter } from "../../types/groups";

class FiltersStore {
    values: Filters

    constructor() {
        makeObservable(this, {
            values: observable,
        });
        this.values = {
            type: FilterUtil.ALL,
            avatarColor: FilterUtil.ALL,
            hasFriends: FilterUtil.ALL,
        }
    }

    setTypeFilter(filter: TypeFilter) {
        runInAction(() => {
            this.values = {
                ...this.values,
                type: filter,
            }
        })
    }
}

export default FiltersStore;