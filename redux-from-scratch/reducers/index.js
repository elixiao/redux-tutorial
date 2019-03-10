const Redux = require('../redux')
const counter = require('./counterReducer')
const sidebar = require('./sidebarReducer')
const theme = require('./themeReducer')
const todo = require('./todoReducer')
module.exports = Redux.combineReducers({
    counter,
    sidebar,
    theme,
    todo
})
