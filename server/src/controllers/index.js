const getDataAll = require('getDataAll')
const getDataApi = require('getDataApi')
const getDataDb = require('getDataDb')
const {sortAsc, sortDesc} = require('./sortAscDesc')
const getDataById = require('./getDataById')
const searchGames = require('./searchData')

module.exports = {
    getDataAll,
    getDataApi,
    getDataById,
    getDataDb,
    searchGames,
    sortAsc,
    sortDesc
}