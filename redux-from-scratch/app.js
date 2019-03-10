const Redux = require('./redux')
const reducer = require('./reducers')
const log = console.log

let oldState = {}
const initialState = {
    counter: -1
}

const store = Redux.createStore(reducer, initialState)

store.subscribe(render)

render(true)

function render(flag) {
    log(flag ? '首次渲染' : '发生变化')
    const state = store.getState()
    log('  旧状态', JSON.stringify(oldState))
    log('  新状态', JSON.stringify(state))
    renderCounter(state)
    renderSidebar(state)
    oldState = state
}

function renderCounter(state) {
    if (state.counter !== oldState.counter) {
        log(`  渲染 counter`,)
    }
}

function renderSidebar(state) {
    if (state.sidebar !== oldState.sidebar) {
        log('  渲染 sidebar')
    }
}

setTimeout(() => {
    store.dispatch({
        type: 'INCREMENT'
    })
}, 1000)

setTimeout(() => {
    store.dispatch({
        type: 'INCREMENT'
    })
}, 2000)


// setTimeout(() => {
//     store.replaceReducer(newReducer)
//     store.dispatch({
//         type: 'Y',
//         dataX: {
//             title: 'Replace_Reducer_Y',
//             count: 22
//         }
//     })
// }, 4000)
//
//
// setTimeout(() => {
//     store.dispatch({
//         type: 'Z',
//         dataZ: {
//             title: 'After_Z',
//             count: 33
//         }
//     })
//     render()
// }, 6000)
