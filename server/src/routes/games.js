const { Router } = require('express')
const { Game, Genres } = require('../db')
const crypto = require('crypto')
const router = Router()

const {
    getDataAll,
    getDataApi,
    getDataById,
    getDataDb,
    searchGames,
    sortAsc,
    sortDesc
} = require('../controllers')

/*--- GET ---*/
router.get('/', async (req, res, next) => {
    try {
        const allGames = await getDataAll()
        res.json(allGames)
    } catch (error) {
        next(error)
    }
})

router.get('/api', async (req, res, next) => {
    try {
        const allGamesApi = await getDataApi()
        if (allGamesApi) {
            res.json(allGamesApi)
        } else {
            throw new Error('404: Data Not Found in api')
        }
    } catch (error) {
        next(error)
    }
})

router.get('/db', (req, res, next) => {
    try {
        getDataDb().then((data) => {
            if (data.length > 0) {
                res.json(data)
            } else {
                res.send('404: Data Not Found in db')
            }
        })
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const games = await getDataAll()
        const gamesById = games.filter(game => game.results.id.includes(id))
        res.json(games)
    } catch (error) {
        next(error)
    }
})

router.get("/asc", async (req, res, next) => {
    try {
      const games = await getDataAll();
      const gamesAsc = games.sort(sortAsc);
      res.json(gamesAsc);
    } catch (error) {
      next(error);
    }
  });
  
  router.get("/desc", async (req, res, next) => {
    try {
      const games = await getDataAll();
      const gamesDesc = games.sort(sortDesc);
      res.json(gamesDesc);
    } catch (error) {
      next(error);
    }
  });

router.get('/search/:title', async (req, res, next) => {
    const { title } = req.params
    try {
        const searchByTitle = await searchGames(title)
        res.json(searchByTitle)
    } catch (error) {
        next(error)
    }
})
/*--- POST ---*/

/*--- DELETE ---*/