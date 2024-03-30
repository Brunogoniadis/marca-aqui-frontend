import React from 'react';

import TableComponent from '../../components/Table';

const Clientes = () => {

    const data = [
        { id: 1, name: 'Cliente 1', email: 'cliente1@example.com' },
        { id: 2, name: 'Cliente 2', email: 'cliente2@example.com' },
        { id: 3, name: 'Cliente 3', email: 'cliente3@example.com' },
        { id: 4, name: 'Cliente 4', email: 'cliente4@example.com' },
        { id: 5, name: 'Cliente 5', email: 'cliente5@example.com' },
        { id: 6, name: 'Cliente 6', email: 'cliente6@example.com' },
        { id: 7, name: 'Cliente 7', email: 'cliente7@example.com' },
        { id: 8, name: 'Cliente 8', email: 'cliente8@example.com' },
        { id: 9, name: 'Cliente 9', email: 'cliente9@example.com' },
        { id: 10, name: 'Cliente 10', email: 'cliente10@example.com' },
        { id: 11, name: 'Cliente 11', email: 'cliente11@example.com' },
        { id: 12, name: 'Cliente 12', email: 'cliente12@example.com' },
        { id: 13, name: 'Cliente 13', email: 'cliente13@example.com' },
        { id: 14, name: 'Cliente 14', email: 'cliente14@example.com' },
        { id: 15, name: 'Cliente 15', email: 'cliente15@example.com' },
        { id: 16, name: 'Cliente 16', email: 'cliente16@example.com' },
        { id: 17, name: 'Cliente 17', email: 'cliente17@example.com' },
        { id: 18, name: 'Cliente 18', email: 'cliente18@example.com' },
        { id: 19, name: 'Cliente 19', email: 'cliente19@example.com' },
        { id: 20, name: 'Cliente 20', email: 'cliente20@example.com' },
        { id: 21, name: 'Cliente 21', email: 'cliente21@example.com' },
        { id: 22, name: 'Cliente 22', email: 'cliente22@example.com' },
        { id: 23, name: 'Cliente 23', email: 'cliente23@example.com' },
        { id: 24, name: 'Cliente 24', email: 'cliente24@example.com' },
        { id: 25, name: 'Cliente 25', email: 'cliente25@example.com' },
        { id: 26, name: 'Cliente 26', email: 'cliente26@example.com' },
        { id: 27, name: 'Cliente 27', email: 'cliente27@example.com' },
        { id: 28, name: 'Cliente 28', email: 'cliente28@example.com' },
        { id: 29, name: 'Cliente 29', email: 'cliente29@example.com' },
        { id: 30, name: 'Cliente 30', email: 'cliente30@example.com' },
        { id: 31, name: 'Cliente 31', email: 'cliente31@example.com' },
        { id: 32, name: 'Cliente 32', email: 'cliente32@example.com' },
        { id: 33, name: 'Cliente 33', email: 'cliente33@example.com' },
        { id: 34, name: 'Cliente 34', email: 'cliente34@example.com' },
        { id: 35, name: 'Cliente 35', email: 'cliente35@example.com' },
        // Adicione mais dados conforme necessário
    ];


    return (
        <div className="col p-5 overflow-auto h-100">
            <div className="row">
                <div className="col-12">
                    <div className="w-100 d-flex justify-content-between">
                        <h2 className="mb-4 mt-0">
                            Clientes
                        </h2>
                        <div>
                            <button className="btn btn-primary btn-lg">
                                Novo Cliente
                            </button>
                        </div>
                    </div>

                    <TableComponent data={data}
                        config={[
                            { label: 'Nome', key: 'name', 'width': 400, 'fixed': true },
                            { label: 'Email', key: 'email' },

                        ]}
                        actions={(rowData) => {
                            console.log('teste', rowData.name); // Adicionando console.log para visualizar os dados de rowData
                            return (
                                <button className="btn btn-primary btn-xs">Ver informações</button>
                            );
                        }}
                        onRowClick={(cliente) => { alert(JSON.stringify(cliente)) }}
                    />

                </div>
            </div>
        </div>
    )


}

export default Clientes;
