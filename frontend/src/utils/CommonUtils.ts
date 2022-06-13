export const deepCopy = (obj: Object) => {
    return JSON.parse(JSON.stringify(obj))
}

export const deepMapCopy = (map: Map<any, any>): Map<any, any> => {
    return new Map(JSON.parse(JSON.stringify(Array.from(map))));
}

export const isEmpty = (text: string) => {
    if (text === undefined || text === null) {
        return true
    }

    return text.toString().trim() === ""
}
