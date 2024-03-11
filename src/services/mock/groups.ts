import { GetGroupsResponse } from "../../types/groups";
import groups from "./data/groups.json";

function delay<T extends (...args: Parameters<T>) => ReturnType<T>>(
    this: ThisParameterType<T>,
    fn: T,
    ms = 1000
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
    return (...args: Parameters<T>) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(fn.apply(this, args));
                } catch (error) {
                    reject(error);
                }
            }, ms);
        });
}

const getGroups = delay<() => GetGroupsResponse>(() => {
    const rnd = Math.random();
    if (rnd >= 0) {
        return {
            result: 1,
            data: groups,
        };
    }
    if (rnd < 1 / 6) {
        return {
            result: 0,
        };
    } else if (rnd < 1 / 3) {
        return {
            result: 1,
        };
    }
    throw new Error("Internal Server Error");
});

export default {
    getGroups,
};
