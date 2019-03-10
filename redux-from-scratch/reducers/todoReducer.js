const todoList = [{id: 0, text: '默认任务'}]

module.exports = function (state = todoList, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {id: +new Date(), text: action.text}]
        case 'REMOVE_TODO':
            return state.filter(it => it.id !== action.id)
        default:
            return state
    }
}