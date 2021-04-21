export function generateInsertSQL(table: string, data: object): string {
    const columns = Object.keys(data)
    const placehouders = columns.map((column, index) => { return `$${index + 1}` })

    return `INSERT INTO ${table} (${columns.join()}) VALUES (${placehouders}) RETURNING *`
}

export function generateUpdateSQL(table: string, data: object, condition: string[]): string {
    const columns = Object.keys(data)
    const placehouders = columns.map((column, index) => { return `${column}=$${index + 1}` })
    const placehoudersCondition = condition.map((field, index) => { return `${field}=$${index + columns.length + 1}` })
    return `UPDATE ${table} SET ${placehouders.join()} WHERE ${placehoudersCondition.join(' AND ')} RETURNING *`
}

export function generateSelectSQL(table: string, condition: string[], attributesToRetrieve: string[] = ['*']) {
    const placehouders = condition.map((field, index) => { return `${field}=$${index + 1}` })

    return `SELECT ${attributesToRetrieve.join()} from ${table} WHERE ${placehouders.join(' AND ')}`
}
export function generateDeleteSQL(table: string, condition: string[]) {
    const placehouders = condition.map((field, index) => { return `${field}=$${index + 1}` })
    return `DELETE FROM ${table} WHERE ${placehouders.join(' AND ')}`
}
