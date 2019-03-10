/*
    redux 本质上是全局状态管理器，负责存储状态、更新状态等
    把对象暴露在全局是非常危险的，需要封装在函数的局部作用域下

  */

function createStore(initialReducer, initialState = {}) {
    // 初试状态
    let reducer = initialReducer
    let state = initialState
    let listeners = []
    // 闭包的形式获取状态，但不能直接更改状态
    const getState = () => {
        return state
    }
    // 暴露接口更新状态，但是更新逻辑是用户自定义的，需要将该函数传递进来
    // 用来接收一个action，并利用reducer，根据旧的state和action计算出最新的state，然后遍历回调函数数组，执行回调.
    const dispatch = (action) => {
        state = reducer(state, action) // 生成新state
        listeners.forEach(f => f()) // 执行回调
    }
    // 存储回调列表，用于订阅状态更新
    const subscribe = cb => {
        listeners.push(cb)
    }
    // 更换新的reducer
    const replaceReducer = newReducer => reducer = newReducer
    return {
        getState,
        dispatch,
        subscribe,
        replaceReducer
    }
}

// 把多个 reducer 合并成一个大的 reducer
function combineReducers(reducers) {
    return function (state = {}, action) {
        const nextState = {}
        Object.keys(reducers).forEach(key => nextState[key] = reducers[key](state[key], action))
        return nextState
    }
}

// 合并多个函数
// function compose(...fns) {
//     return function (...initialArgs) {
//         return fns.reverse().reduce((args, f) => [f(...args)], initialArgs)[0]
//     }
// }

function compose(...funcs) {
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

// 以方法的形式来调用action，自动dispatch对应的action
function bindActionCreators() {

}


module.exports = {
    createStore,
    combineReducers,
    compose
}


