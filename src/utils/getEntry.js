function getEntry(input, dataBase) {
    const entryIndex = dataBase.findIndex((entry) => entry.title == input.title)
    return (dataBase[entryIndex])
}

export { getEntry }