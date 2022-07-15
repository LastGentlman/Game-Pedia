function sortAsc(a, b) {
    if (a.tittle < b.tittle) return -1
    if (a.tittle > b.tittle) return 1
    return 0
}

function sortDesc(a, b) {
    if (a.tittle > b.tittle) return -1
    if (a.tittle < b.tittle) return 1
    return 0
}

module.exports = {
    sortAsc,
    sortDesc
}