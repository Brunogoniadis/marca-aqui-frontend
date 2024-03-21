import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Agendamentos from './pages/agendamentos';
import Clientes from './pages/Clientes';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="container-fluid h-100">
                <div className='row h-100'>
                    <Sidebar />
                    <Routes>
                        <Route path='/' exact element={<Agendamentos />} />
                        <Route path='/clientes' exact element={<Clientes />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
