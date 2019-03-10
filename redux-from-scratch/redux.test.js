const Redux = require('./redux')

const log = console.log

function a(n) {
    log('a 参数 ' + n)
    return n + 3
}

function b(n) {
    log('b 参数 ' + n)
    return n + 2
}

function c(n) {
    log('c 参数 ' + n)
    return n + 1
}


log(a(b(c(0))))
log(Redux.compose(a, b, c)(0))


const combinedReducer = require('./reducers/index')
log(combinedReducer)
const store = Redux.createStore(combinedReducer)

function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

function removeTodo(id) {
    return {
        type: 'REMOVE_TODO',
        id
    }
}

store.subscribe(() => {
    console.log(store.getState())
})
let addReadAction = addTodo('看书')
store.dispatch(addReadAction)
let addEatAction = addTodo('吃饭')
store.dispatch(addEatAction)
let removeEatAction = removeTodo(0)
store.dispatch(removeEatAction)
