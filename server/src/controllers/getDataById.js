const axios = require('axios')
const getDataBase = require('./getDataDb')
const KEY = process.env.API_KEY

const getDataById = async (id) => {
    let gameById = {}

    gameById = await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY}`)
        .then(res => {
            return res.data
        }).catch(err => err)

    if (typeof gameById !== 'object') {
        console.log('type of gameById: ',typeof gameById)
        const games = await getDataBase()
        recipeById = recipes.filter(res => res.id === id)[0]
    }
    return gameById
}

module.exports = getDataById