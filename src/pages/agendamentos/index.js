
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const currentDate = moment().startOf('day');

const Agendamentos = () => {
    return (
        <div className="col p-5 overflow-auto h-100">
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-4 mt-0">
                        Agendamentos
                    </h2>

                    <Calendar
                        localizer={localizer}
                        events={[
                            {
                                title: "Corte Simples",
                                start: currentDate.toDate(),
                                end: moment(currentDate).add(30, 'minutes').toDate()
                            },
                            {
                                title: "Corte Máquina",
                                start: moment(currentDate).add(1, 'hour').toDate(),
                                end: moment(currentDate).add(1, 'hour').add(30, 'minutes').toDate()
                            },
                            {
                                title: "Corte",
                                start: moment(currentDate).add(1, 'day').startOf('day').hour(12).toDate(),
                                end: moment(currentDate).add(1, 'day').startOf('day').hour(13).toDate()
                            },
                            {
                                title: "Corte",
                                start: moment(currentDate).add(1, 'day').startOf('day').hour(14).toDate(),
                                end: moment(currentDate).add(1, 'day').startOf('day').hour(15).toDate()
                            },
                            {
                                title: "Corte",
                                start: moment(currentDate).add(2, 'day').startOf('day').hour(10).toDate(),
                                end: moment(currentDate).add(2, 'day').startOf('day').hour(11).toDate()
                            },
                            {
                                title: "Corte",
                                start: moment(currentDate).add(2, 'day').startOf('day').hour(16).toDate(),
                                end: moment(currentDate).add(2, 'day').startOf('day').hour(17).toDate()
                            },
                            {
                                title: "Corte",
                                start: moment(currentDate).add(3, 'day').startOf('day').hour(13).toDate(),
                                end: moment(currentDate).add(3, 'day').startOf('day').hour(14).toDate()
                            },
                        ]}
                        defaultView="week"
                        selectable
                        popup
                        style={{ height: 800 }}
                    />

                </div>
            </div>

        </div>

    )
}

export default Agendamentos