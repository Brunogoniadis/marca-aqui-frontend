const INITIAL_STATE = {
    agendamentos: [],
    agendamento: {}
}

function agendamento(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@agendamento/ALL': {

        }
        default:
            return state
    }
}


export default agendamento