import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VisibilityFilters } from "../actions"

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}
export const todoApp = (state = initialState, action) => {
    console.log(action)
    // TODO: create action for delete
    switch (action.type) {
        case ADD_TODO :
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false,
                        id:action.id
                    }
                ]
            })
            case TOGGLE_TODO :
                return Object.assign({}, state, {
                    todos: state.todos.map((todo, id) => {
                        console.log(todo);
                        if (id === action.id) {
                            return Object.assign({}, todo, {
                                completed: !todo.completed,
                            })
                        }
                        return todo;
                    })
                })
        case SET_VISIBILITY_FILTER:
            return Object.assign({},state,{
                visibilityFilter:action.filter
            })
        default:
            return state
    }
}