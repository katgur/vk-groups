import { isGetGroupResponse } from "../../types/typeGuards";
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

const fetch = delay((): unknown => {
    const rnd = Math.random();
    if (rnd >= 1 / 2) {
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

const getGroups = async () => {
    const groups = await fetch();
    if (!isGetGroupResponse(groups)) {
        throw new Error("Wrong data from server");
    }
    return groups;
};

export default {
    getGroups,
};
