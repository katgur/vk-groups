import { action, makeObservable, observable, runInAction } from "mobx";
import {
    AvatarColorFilter,
    FilterUtil,
    Filters,
    HasFriendsFilter,
    TypeFilter,
} from "../../types/groups";

class FiltersStore {
    values: Filters;

    constructor() {
        makeObservable(this, {
            values: observable,
            setTypeFilter: action,
            setAvatarColorFilter: action,
            setHasFriendsFilter: action,
        });
        this.values = {
            type: FilterUtil.ALL,
            avatarColor: FilterUtil.ALL,
            hasFriends: FilterUtil.ALL,
        };
    }

    setTypeFilter(filter: TypeFilter) {
        runInAction(() => {
            this.values = {
                ...this.values,
                type: filter,
            };
        });
    }

    setAvatarColorFilter(filter: AvatarColorFilter) {
        runInAction(() => {
            this.values = {
                ...this.values,
                avatarColor: filter,
            };
        });
    }

    setHasFriendsFilter(filter: HasFriendsFilter) {
        runInAction(() => {
            this.values = {
                ...this.values,
                hasFriends: filter,
            };
        });
    }
}

export default FiltersStore;
