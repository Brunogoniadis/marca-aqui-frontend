import { all } from "redux-saga/effects";

import agendamento from "./agendamento/sagas";
import cliente from "./cliente/sagas";

export default function* rootSaga() {
    return yield all([cliente, agendamento])
}


