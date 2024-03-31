const TableComponent = ({ data, config, actions, onRowClick }) => {

    return (
        <div className="table-responsive max-height-500">
            <table className="table table-striped table-bordered custom-table">
                <colgroup>
                    {config.map(({ width, fixed }, index) => (
                        <col key={index} style={{ width: width, minWidth: width, maxWidth: width, position: fixed ? 'sticky' : 'static', left: fixed ? index * width : 'auto' }} />
                    ))}
                </colgroup>
                <thead>
                    <tr>
                        {/* Render table headers based on the config */}
                        {config.map(({ label }) => (
                            <th key={label}>{label}</th>
                        ))}
                        {/* Render nova coluna */}
                        <th key="novaColuna">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((cliente) => (
                        <tr key={cliente.id} onClick={() => onRowClick(cliente)}> {/* Adicionando onClick para cada linha */}
                            {/* Render table cells based on the config */}
                            {config.map(({ key }) => (
                                <td key={key}>{cliente[key]}</td>
                            ))}
                            {/* Renderizar o botão dentro da célula de ação */}
                            <td key="novaColunaDado">{actions(cliente)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
