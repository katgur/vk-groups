import useGroups from "../../hooks/useGroups";
import GroupCard from "./GroupCard";

function GroupList() {
    const groups = useGroups();

    if (!groups) {
        return;
    }

    return (
        <ul>
            {groups.map((group) => (
                <li key={group.id}>
                    <GroupCard {...group} />
                </li>
            ))}
        </ul>
    );
}

export default GroupList;
