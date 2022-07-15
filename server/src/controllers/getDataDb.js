const { Game, Genres } = require('../db.js')

const getGamesDB = async () => {
    let data = await Recipe.findAll({
        include: {
            module: Genders,
            through: {
                attributes: []
            }
        }
    })

    if (data.length === 0) {
        data = 'API data is empty'
        return data
    } else {
        const gameDB = data.map((res) => {
            return {
                id: res.id,
                title: res.title,
                requirements: res.requirements_en.recomended,
                image: res.background_image,
                platforms: res.platforms.map((p) => {
                    return p.platform.name
                }),
                genres: res.genres.map((g) => {
                    return g.name
                })
            }
        })
        return gameDB
    }
}

module.exports = getGamesDB