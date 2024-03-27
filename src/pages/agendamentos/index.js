
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { filterAgendamentos } from '../../store/modules/agendamento/actions';
import util from '../../util';
const localizer = momentLocalizer(moment)
const currentDate = moment().startOf('day');


const Agendamentos = () => {

    const dispatch = useDispatch()
    const { agendamentos } = useSelector((state) => state.agendamento)

    console.log('agendamentos', agendamentos)


    const formatRange = (periodo) => {
        let finalRange = {}
        if (Array.isArray(periodo)) {
            finalRange = {
                start: moment(periodo[0]).format('YYYY-MM-DD'),
                end: moment(periodo[periodo.length - 1]).format('YYYY-MM-DD'),
            };
        } else {
            finalRange = {
                start: moment(periodo.start).format('YYYY-MM-DD'),
                end: moment(periodo.end).format('YYYY-MM-DD'),
            };
        }
        return finalRange
    }

    const formatEventos = agendamentos.map((agendamento) => ({
        title: `${agendamento.servicoId.titulo} - Cliente ${agendamento.clienteId.nome} - Colaborador: ${agendamento.colaboradorId.nome}`,
        start: moment(agendamento.data).toDate(),
        end: moment(agendamento.data)
            .add(
                util.hourToMinutes(
                    moment(agendamento.servicoId.duracao).format('HH:mm')
                ),
                'minutes'
            )
            .toDate(),
    }));


    useEffect(() => {
        dispatch(
            filterAgendamentos(moment().weekday(0).format('YYYY-MM-DD'),
                moment().weekday(6).format('YYYY-MM-DD')
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
                        events={formatEventos}
                        onRangeChange={(periodo) => {
                            const { start, end } = formatRange(periodo)
                            console.log("start", start)
                            console.log("end", end)
                            dispatch(
                                filterAgendamentos(start, end)
                            )


                        }}
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