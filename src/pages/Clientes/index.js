import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allClientes } from '../../store/modules/cliente/actions';
import { format } from 'date-fns';
import TableComponent from '../../components/Table';

const Clientes = () => {
    const dispatch = useDispatch();
    const clientesFromRedux = useSelector(state => state.cliente.clientes);
    const [clientesLocal, setClientesLocal] = useState([]);

    useEffect(() => {
        dispatch(allClientes());
    }, [dispatch]);

    useEffect(() => {
        setClientesLocal(clientesFromRedux);
    }, [clientesFromRedux]);

    useEffect(() => {
        console.log('clientesLocal', clientesLocal)
    }, [clientesLocal])

    // Função para mapear os clientes e ajustar o sexo e a data
    const mapClientesWithAdjustedData = (clientes) => {
        return clientes.map(cliente => {
            return {
                ...cliente,
                sexo: cliente.sexo === 'F' ? 'Feminino' : cliente.sexo === 'M' ? 'Masculino' : cliente.sexo,
                dataCadastro: format(new Date(cliente.dataCadastro), 'dd/MM/yyyy HH:mm:ss')
            };
        });
    };

    // Mapear clientes e ajustar sexo e data antes de passar para o TableComponent
    const clientesParaTabela = mapClientesWithAdjustedData(clientesLocal);

    return (
        <div className="col p-5 overflow-auto h-100">
            <div className="row">
                <div className="col-12">
                    <div className="w-100 d-flex justify-content-between">
                        <h2 className="mb-4 mt-0">Clientes</h2>
                        <div>
                            <button className="btn btn-primary btn-lg">Novo Cliente</button>
                        </div>
                    </div>

                    <TableComponent
                        data={clientesParaTabela}
                        config={[
                            { label: 'Nome', key: 'nome', 'width': 400, 'fixed': true },
                            { label: 'Email', key: 'email', 'width': 300 },
                            { label: 'Telefone', key: 'telefone', 'width': 150 },
                            { label: 'Sexo', key: 'sexo', 'width': 80 },
                            { label: 'Data Cadastro', key: 'dataCadastro', 'width': 200 }
                        ]}
                        actions={(rowData) => {
                            return (
                                <button className="btn btn-primary btn-xs">Ver informações</button>
                            );
                        }}
                        onRowClick={(cliente) => { alert(JSON.stringify(cliente)) }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Clientes;
