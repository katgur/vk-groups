import { action, makeObservable, observable, runInAction } from "mobx";
import { ErrorInfo } from "../../types/error";

export class ErrorStore {
    info: ErrorInfo | null;

    constructor() {
        makeObservable(this, {
            info: observable,
            setError: action,
        });
        this.info = null;
    }

    setError(info: ErrorInfo) {
        runInAction(() => {
            this.info = {
                ...info,
                tryAgain: () => {
                    this.info = null;
                    info.tryAgain();
                },
            };
        });
    }
}

export default ErrorStore;
