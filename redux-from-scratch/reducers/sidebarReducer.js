const initialState = {
    show: false,
}

module.exports = function (state = initialState, action) {
    switch (action.type) {
        case 'FOLD':
            return {...state, show: false}
        case 'UNFOLD':
            return {...state, show: true}
        case 'TOGGLE':
            return {...state, show: !state.show}
        default:
            return state
    }
}
