import { mdiCalendarBlankOutline, mdiAccountMultiple } from '@mdi/js';
import { Link, useLocation } from 'react-router-dom';

import logo from "../../assets/Logo.png";

const Sidebar = () => {
    const location = useLocation();

    return (
        <sidebar className="col-2 h-100">
            <img src={logo} className="img-fluid px-3 py-4" alt="Logo" />

            <ul className='p-0 m-0'>
                <li>
                    <Link to="/" className={`mdi mdi-calendar-check ${location.pathname === '/' ? 'active' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d={mdiCalendarBlankOutline} fill="white" />
                        </svg>
                        <span>Agendamentos</span>
                    </Link>
                </li>

                <li>
                    <Link to="/clientes" className={`mdi mdi-account ${location.pathname === '/clientes' ? 'active' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d={mdiAccountMultiple} fill="white" />
                        </svg>
                        <span>Clientes</span>

                    </Link>
                </li>
            </ul>
        </sidebar>
    )
}

export default Sidebar;
