export const Types = {
    CHANGE_COUNTER_PLUS: 'CHANGE_COUNTER_PLUS',
    CHANGE_COUNTER_LESS: 'CHANGE_COUNTER_LESS',
    CHANGE_COUNTER_RESET: 'CHANGE_COUNTER_RESET',
}

export function counterChangePlus(){
    return{
        type: Types.CHANGE_COUNTER_PLUS
    }
}

export function counterChangeLess(){
    return{
        type: Types.CHANGE_COUNTER_LESS
    }
}

export function counterChangeReset(){
    return{
        type: Types.CHANGE_COUNTER_RESET
    }
}

const initialState = {
    counter: 0
}

export default function ChangeCounter(state = initialState, action) {
    switch(action.type) {
        case Types.CHANGE_COUNTER_PLUS: {
            return{
                counter: state.counter + 1,
            }
        }
        case Types.CHANGE_COUNTER_LESS: {
            return{
                counter: state.counter - 1,
            }
        }
        case Types.CHANGE_COUNTER_RESET: {
            return{
                ...state,
                counter: 0,
            }
        }

        default:
            return state
    }
}