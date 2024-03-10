function GroupCard({ ...group }) {
    return (
        <article>
            <h1>
                <div style={{ backgroundColor: group.avatar_color }}></div>
                {group.name}
            </h1>
            <p>{group.closed ? "Закрыта" : "Открыта"}</p>
            <p>{`${group.members_count} участников`}</p>
        </article>
    );
}

export default GroupCard;
