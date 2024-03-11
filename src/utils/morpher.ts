function morphNumberMasculine(n: number, single: string, multiple: string) {
    if (n > 10 && n < 20) {
        return `${n} ${multiple}`;
    }
    if (n % 10 === 0) {
        return `${n} ${multiple}`;
    } else if (n % 10 === 1) {
        return `${n} ${single}`;
    } else if (n % 10 < 5) {
        return `${n} ${single}a`;
    } else {
        return `${n} ${multiple}`;
    }
}

export function morphMembersNumber(n: number) {
    return morphNumberMasculine(n, "подписчик", "подписчиков");
}

export function morphFriendsNumber(n: number) {
    return morphNumberMasculine(n, "друг", "друзей");
}
