import { all, takeLatest, call, put, select } from 'redux-saga/effects'
import { updateClientes } from './actions'
import { types } from './types'
import api from '../../../services/api'
import consts from '../../../consts'

export function* allClientes (){
    try {
        
    } catch (err) {
        alert(err)
    }
}

export default all([
    takeLatest(types.ALL_CLIENTES, allClientes)
])