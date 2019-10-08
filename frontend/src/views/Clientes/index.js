import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import clienteApi from "../../services/clienteApi";

function Clientes () {

    const [ data, setData ] = useState([]);
    const [ item, setItem ] = useState([]);
    const [ tableVisible, setTableVisible ] = useState(true);

    useEffect(() => {
        onLoad();
    }, [])

    const onLoad = async () => {
        let response = await clienteApi._all();
        setData(response.data.data);
        return response;
    }

    const onCreate = () => {
        let item = {
            'id' : 0,
            'nome' : '',
            'telefone' : '',
            'email' : ''
        }
        setItem(item)
        setTableVisible(false);
    }

    const onEdit = (item) => {
        setItem(item)
        setTableVisible(false);
    }

    const onDelete = async (id) => {
        await clienteApi._delete(id)
        onLoad();
    }

    const onSave = async (item) =>{
        if(item.id === 0) {
            // create
            return await clienteApi._create(item)
        } else {
            // update
            return await clienteApi._update(item.id, item)
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
                    Clientes
                    <small>Seja bem vindo...</small>
                </h1>
                <ol className="breadcrumb">
                    <li><Link to="/dashboard"><i className="fa fa-dashboard"></i> Home</Link></li>
                    <li className="active">Cliente</li>
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

export default Clientes;

function DataForm( info ){

    const [ id, setId ] = useState(info.data.id);
    const [ nome, setNome ] = useState(info.data.nome);
    const [ telefone, setTelefone ] = useState(info.data.telefone);
    const [ email, setEmail ] = useState(info.data.email);

    const onSubmit = (e) => {
        return info.onSubmit(e, {
            id, nome, email, telefone
        });
    }

    return (

        <div className="box">
            <div className="box-header">
                <h3 className="box-title">Dados do Cliente</h3>
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
                            <label htmlFor="nome">Nome</label>
                            <input
                                onChange={event => setNome( event.target.value )}
                                value={nome}
                                type="text" className="form-control" id="nome" placeholder="Nome" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={event => setEmail( event.target.value )}
                                value={email}
                                type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input
                                onChange={event => setTelefone( event.target.value)}
                                value={telefone}
                                type="text" className="form-control" id="telefone" placeholder="Telefone" />
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
                <h3 className="box-title">Clientes</h3>
            </div>

            <div className="box-body">
                <button onClick={onCreate} type="button" className="btn btn-success">Novo</button>
                <br /><br />
                <table className="table table-bordered table-hover table-condensed">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
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