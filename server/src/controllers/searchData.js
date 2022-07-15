const axios = require('axios');
const getDataDb = require('./getDataDb')
const KEY = process.env.API_KEY

const searchGames = async (title) => {
    title = title[0].toUpperCase() + title.slice(1)
    const dataApi = await axios.get(`https://api.rawg.io/api/games?search=${title}&key=${KEY}`)
        .then(data => data.data)

    const db = await getDataDb()
    let dataDB = []

    if (Array.isArray(db)) {
        dataDB = db.filter(data => data.title.includes(title))
    }

    const games = [...dataDB, ...dataApi.results]
    return games
}

module.exports = {
    searchGames
}