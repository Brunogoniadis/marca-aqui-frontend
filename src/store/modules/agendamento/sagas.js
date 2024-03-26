import { all, takeLatest, call } from 'redux-saga/effects'
import api from '../../../services/api'
import consts from '../../../consts'

export function* filterAgendamento({ start, end }) {
    try {
        const { data: res } = yield call(api.post, '/agendamento/filter', {
            salaoId: consts.salaoId,
            periodo: {
                inicio: start,
                final: end,
            },
        });
        console.log(res);
    } catch (err) {
        console.log(err.message);
    }


}

export default all([takeLatest("@agendamento/FILTER", filterAgendamento)])