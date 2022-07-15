const getDataApi = require('./getDataApi')
const getDataDb = require('./getDataDb')

const getAllGames = async () => {
    let allGames = []
    const dataApi = await getDataApi()
    const dataDb = await getDataDb()

    if (Array.isArray(dataDb)) {
        if (dataApi.length === 0 && dataDb.length === 0) allGames = 'There are no games available'
        else if (dataApi.length > 0 && dataApi.length === 0) allGames = dataApi
        else if (dataApi.length === 0 && dataApi.length > 0) allGames = dataDb
        else allGames = [...dataApi, ...dataDb]
    } else {
        if (dataApi.length === 0) allGames = 'There are no games available'
        else allGames = dataApi
    }
    return allGames
}

module.exports = {
    getAllGames
}