const initialState = {
    className: 'theme-light'
}

module.exports = function (state = initialState, action) {
    switch (action.type) {
        case 'DARK':
            return {className: 'theme-dark'}
        case 'LIGHT':
            return {className: 'theme-light'}
        default:
            return state
    }
}
