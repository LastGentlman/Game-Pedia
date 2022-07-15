const axios = require('axios');

const fs = require('fs')

const getAllGames = async () => {
    let data = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
    ).then(info => info.data)

    if (Array.isArray(data.results)) {
        if (data.length === 0) {
            data = 'API data is empty'
            return data
        } else {
            return data.results
        }
    } else {
        throw new Error('Error with API or controller')
    }
}

module.exports = {
    getAllGames
}