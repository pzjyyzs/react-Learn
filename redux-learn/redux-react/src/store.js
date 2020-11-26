
export function createStore(state, stateChanger) {
    const listeners = [];

    const subscribe = (listener) =>{ 
        console.log(listener)
        listeners.push(listener)
    }
    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state, action)
        listeners.forEach((listener) =>{ 
            console.log(state)
            listener()
        })
    }
    return { getState, dispatch, subscribe }
}