export const removeUndefinedQuery = (
    query: Record<string, string | undefined>,
): Record<string, string | undefined> => {
    const entries = Object.entries(query);

    return Object.fromEntries(entries.filter(entrie => entrie[1] !== undefined));
};
