import { action, makeObservable, observable, runInAction } from "mobx";
import {
    AvatarColorFilter,
    FriendsFilter,
    Group,
    TypeFilter,
} from "../../types/groups";
import api from "../../services/mock/groups";
import Store from "..";

class GroupStore {
    store: Store;
    all: Group[] | null;
    filtered: Group[] | null;

    constructor(store: Store) {
        makeObservable(this, {
            all: observable,
            filtered: observable,
            fetchAll: action,
            filterByType: action,
            filterByAvatarColor: action,
            filterByHasFriends: action,
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
                    this.all = [...data];
                    this.filtered = [...data];
                });
            })
            .catch((error) => {
                this.store.error.setError(error.message);
            });
    }

    filterByType(filter: TypeFilter) {
        runInAction(() => {
            if (!this.all) {
                return;
            }
            switch (filter) {
                case TypeFilter.ALL:
                    this.filtered = this.all;
                    break;
                case TypeFilter.CLOSE:
                    this.filtered = this.all.filter((group) => group.closed);
                    break;
                case TypeFilter.OPEN:
                    this.filtered = this.all.filter((group) => !group.closed);
                    break;
                default:
                    break;
            }
        });
    }

    filterByAvatarColor(filter: AvatarColorFilter) {
        runInAction(() => {
            if (!this.all) {
                return;
            }
            if (filter === AvatarColorFilter.ALL) {
                this.filtered = this.all;
                return;
            }
            this.filtered = this.all.filter(
                (group) => group.avatar_color === filter
            );
        });
    }

    filterByHasFriends(filter: FriendsFilter) {
        runInAction(() => {
            if (!this.all) {
                return;
            }
            switch (filter) {
                case FriendsFilter.ALL:
                    this.filtered = this.all;
                    break;
                case FriendsFilter.HAS_FRIENDS:
                    this.filtered = this.all.filter(
                        (group) => group.friends && group.friends.length !== 0
                    );
                    break;
                case FriendsFilter.NO_FRIENDS:
                    this.filtered = this.all.filter(
                        (group) => !group.friends || group.friends.length === 0
                    );
                    break;
                default:
                    break;
            }
        });
    }
}

export default GroupStore;
