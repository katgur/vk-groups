import { isGetGroupResponse } from "../../types/typeGuards";
import delay from "../../utils/delay";
import groups from "./data/groups.json";

const fetch = delay((): unknown => {
    const rnd = Math.random();
    if (rnd >= 1 / 5) {
        return {
            result: 1,
            data: groups,
        };
    }
    if (rnd < 1 / 15) {
        return {
            result: 0,
        };
    } else if (rnd < 2 / 15) {
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
