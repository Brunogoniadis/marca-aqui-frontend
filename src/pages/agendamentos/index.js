
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { filterAgendamentos } from '../../store/modules/agendamento/actions';
const localizer = momentLocalizer(moment)

const currentDate = moment().startOf('day');


const Agendamentos = () => {

    const dispatch = useDispatch()
    const { agendamentos } = useSelector((state) => state.agendamento)

    console.log('agendamentos', agendamentos)

    useEffect(() => {
        dispatch(
            filterAgendamentos(moment().weekday(0).format('2023-01-01'),
                moment().weekday(6).format('2024-04-30')
            )
        )
    }, [])

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
                            }
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