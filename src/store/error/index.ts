import { action, makeObservable, observable, runInAction } from "mobx";
import Store from "..";

export class ErrorStore {
    store: Store;
    message: string | null;

    constructor(store: Store) {
        makeObservable(this, {
            message: observable,
            setError: action,
        });
        this.store = store;
        this.message = null;
    }

    setError(error: string) {
        runInAction(() => {
            this.message = error;
        });
    }
}

export default ErrorStore;
