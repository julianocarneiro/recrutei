import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ticketsApi from "../../services/ticketsApi";

function Tickets () {

    const [ data, setData ] = useState([]);
    const [ item, setItem ] = useState([]);
    const [ tableVisible, setTableVisible ] = useState(true);

    useEffect(() => {
        onLoad();
    }, [])

    const onLoad = async () => {
        let response = await ticketsApi._all();
        setData(response.data.data);
        return response;
    }

    const onCreate = () => {
        let item = {
            'id' : 0,
            'problema' : '',
            'solucao' : '',
            'observacao' : '',
            'tecnico_id' : '',
            'cliente_id' : '',
            'tipos_suporte_id' : '',
        }
        setItem(item)
        setTableVisible(false);
    }

    const onEdit = (item) => {
        setItem(item)
        setTableVisible(false);
    }

    const onDelete = async (id) => {
        await ticketsApi._delete(id)
        onLoad();
    }

    const onSave = async (item) =>{
        if(item.id === 0) {
            // create
            return await ticketsApi._create(item)
        } else {
            // update
            return await ticketsApi._update(item.id, item)
        }
    }

    const onSubmit = async (e, item) => {
        e.preventDefault();

        await onSave(item);

        onLoad();
        setTableVisible(true);
    }

    return (

        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Ticket
                    <small>Seja bem vindo...</small>
                </h1>
                <ol className="breadcrumb">
                    <li><Link to="/dashboard"><i className="fa fa-dashboard"></i> Home</Link></li>
                    <li className="active">Ticket</li>
                </ol>
            </section>

            <section className="content">
                <div className="row">
                    <div className="col-xs-12">

                        { tableVisible ?
                            <DataTable data={data} onEdit={onEdit} onDelete={onDelete} onCreate={onCreate}/>
                            :
                            <DataForm onSubmit={onSubmit} data={ item }/>
                        }

                    </div>

                </div>

            </section>
        </div>
    );

}


function DataForm( info ){

    const [ id, setId ] = useState(info.data.id);
    const [ problema, setProblema ] = useState(info.data.problema);
    const [ solucao, setSolucao ] = useState(info.data.solucao);
    const [ observacao, setObservacao ] = useState(info.data.observacao);
    const [ tecnico_id, setTecnicoId ] = useState(info.data.tecnico_id);
    const [ cliente_id, setClienteId ] = useState(info.data.cliente_id);
    const [ tipos_suporte_id, setTiposSuporteId ] = useState(info.data.tipos_suporte_id);

    const onSubmit = (e) => {
        return info.onSubmit(e, {
            id, problema, solucao, observacao, tecnico_id, cliente_id, tipos_suporte_id
        });
    }

    return (

        <div className="box">
            <div className="box-header">
                <h3 className="box-title">Dados</h3>
            </div>

            <div className="box-body">
                <form onSubmit={onSubmit}>

                    <div className="box-body">
                        <div className="form-group">
                            <label htmlFor="id">ID</label>
                            <input
                                onChange={event => setId( event.target.value )}
                                value={id}
                                type="text" className="form-control" id="id" placeholder="ID"
                                readOnly="readOnly"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="problema">Problema</label>
                            <input
                                onChange={event => setProblema( event.target.value )}
                                value={problema}
                                type="text" className="form-control" id="problema" placeholder="Problema" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="solucao">Solução</label>
                            <input
                                onChange={event => setSolucao( event.target.value )}
                                value={solucao}
                                type="text" className="form-control" id="solucao" placeholder="Solução" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="observacao">Observação</label>
                            <input
                                onChange={event => setObservacao( event.target.value )}
                                value={observacao}
                                type="text" className="form-control" id="observacao" placeholder="Observação" />
                        </div>


                        <div className="form-group">
                            <label htmlFor="cliente">Cliente</label>
                            <input
                                onChange={event => setClienteId( event.target.value )}
                                value={cliente_id}
                                type="text" className="form-control" id="cliente" placeholder="Cliente" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tecnico">Técnico</label>
                            <input
                                onChange={event => setTecnicoId( event.target.value )}
                                value={tecnico_id}
                                type="text" className="form-control" id="tecnico" placeholder="Técnico" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tipoSuporte">Tipo Suporte</label>
                            <input
                                onChange={event => setTiposSuporteId( event.target.value )}
                                value={tipos_suporte_id}
                                type="text" className="form-control" id="tipoSuporte" placeholder="Tipo Suporte" />
                        </div>
                    </div>

                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

function DataTable( info ){

    const { data } = info;

    const onCreate = () => {
        return info.onCreate();
    }

    const onEdit = (item) => {
        return info.onEdit(item);
    }

    const onDelete = (id) => {
        return info.onDelete(id);
    }

    return (

        <div className="box">
            <div className="box-header">
                <h3 className="box-title">Tickets</h3>
            </div>

            <div className="box-body">
                <button onClick={onCreate} type="button" className="btn btn-success">Novo</button>
                <br /><br />
                <table className="table table-bordered table-hover table-condensed">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Problema</th>
                        <th>Solução</th>
                        <th>Observacao</th>
                        <th>Cliente</th>
                        <th>Técnico</th>
                        <th>Tipo Suporte</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.problema}</td>
                                <td>{item.solucao}</td>
                                <td>{item.observacao}</td>
                                <td>{item.cliente_id}</td>
                                <td>{item.tecnico_id}</td>
                                <td>{item.tipos_suporte_id}</td>
                                <td>
                                    <button onClick={e => onEdit(item)} className="btn btn-primary btn-sm">Editar</button>
                                    <button onClick={e => onDelete(item.id)} className="btn btn-danger btn-sm">Deletar</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        </div>



    )
}


export default Tickets;
    
   