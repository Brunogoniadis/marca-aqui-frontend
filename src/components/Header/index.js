import { mdiChevronDown } from '@mdi/js';

const Header = () => {
    return (
        <header className="container-fluid d-flex justify-content-end">
            <div className="d-flex align-items-center">
                <div>
                    <span className="d-block m-0 p-0 text-white">Barbearia Dantas</span>
                    <small className="m-0 p-0">Plano Gold</small>
                </div>
                <img src="https://a-static.mlcdn.com.br/450x450/placa-decorativa-barber-shop-barbearia-1775plmk-allodi/allodidecoracoesltda-me/27871/edb51a78e58de47c530a472142245d20.jpeg" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d={mdiChevronDown} fill="white" />
                </svg>
            </div>
        </header >
    )
}

export default Header