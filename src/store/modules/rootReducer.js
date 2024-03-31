import { combineReducers } from 'redux'

import agendamento from './agendamento/reducer'
import cliente from './cliente/reducer';


export default combineReducers(

    {
        cliente,
        agendamento,
    })

