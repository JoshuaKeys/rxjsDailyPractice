import { BehaviorSubject } from "rxjs"
import { scan, distinctUntilChanged } from "rxjs/operators";

const createStore = (reducer, preloadedState) => {
    const eventSource = new BehaviorSubject(preloadedState);
    const scanned = eventSource.pipe(
        scan(reducer),
        distinctUntilChanged()
    )
    return {
        dispatch(action) {
            eventSource.next(action);
        },
        subscribe(listener) {
            scanned.subscribe(listener);
        }
    }
}

const defaultState = {
    todos: ["Write some code!", "Play video games!"]
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            let newState = Object.assign({}, state);
            newState.todos = [...state.todos, action.todo]
            return newState;
    }
    return state;
}

const store = createStore(reducer, defaultState);

store.subscribe(console.log)
store.dispatch({type: 'ADD_TODO', todo: 'Learn RX JX'})
store.dispatch({type: 'ADD_TODOS', todo: 'Learn RX JXX'})