import Filter from "bad-words";

const filter = new Filter();

export const replaceBadWords = (data: string) => {
    return filter.clean(data);
};
