import types from "./types";

import { produce } from 'immer';


const INITIAL_STATE = {
    clientes: []
}

function cliente(state = INITIAL_STATE, action) {
    switch (action.types) {
        case types.UPDATE_CLIENTES: {
            return produce(state, draft => {
                
                draft={...draft, ...action.payload}
            })

        }
        default: return state
    }
}

export default cliente