import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import usuariosApi from "../../services/usuariosApi";

function Usuarios () {

    const [ data, setData ] = useState([]);
    const [ item, setItem ] = useState([]);
    const [ tableVisible, setTableVisible ] = useState(true);

    useEffect(() => {
        onLoad();
    }, [])

    const onLoad = async () => {
        let response = await usuariosApi._all();
        setData(response.data.data);
        return response;
    }

    const onCreate = () => {
        let item = {
            'id' : 0,
            'username' : '',
            'email' : '',
            'password' : '',
            'perfil_id' : 1,
        }
        setItem(item)
        setTableVisible(false);
    }

    const onEdit = (item) => {
        setItem(item)
        setTableVisible(false);
    }

    const onDelete = async (id) => {
        await usuariosApi._delete(id)
        onLoad();
    }

    const onSave = async (item) =>{
        if(item.id === 0) {
            // create
            return await usuariosApi._create(item)
        } else {
            // update
            return await usuariosApi._update(item.id, item)
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
                    Usuarios
                    <small>Seja bem vindo...</small>
                </h1>
                <ol className="breadcrumb">
                    <li><Link to="/dashboard"><i className="fa fa-dashboard"></i> Home</Link></li>
                    <li className="active">Usuários</li>
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
    const [ username, setUsername ] = useState(info.data.username);
    const [ email, setEmail ] = useState(info.data.email);
    const [ password, setPassword ] = useState(info.data.password);
    const [ perfil_id, setPerfil_id ] = useState(info.data.perfil_id);

    const onSubmit = (e) => {
        return info.onSubmit(e, {
            id, username, email, password, perfil_id
        });
    }

    return (

        <div className="box">
            <div className="box-header">
                <h3 className="box-title">Dados do Usuário</h3>
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
                                onChange={event => setUsername( event.target.value )}
                                value={username}
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
                            <label htmlFor="senha">Senha</label>
                            <input
                                onChange={event => setPassword( event.target.value)}
                                value={password}
                                type="text" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="perfil">Perfil</label>
                            <input
                                onChange={event => setPerfil_id( event.target.value )}
                                value={perfil_id}
                                type="text" className="form-control" id="perfil" placeholder="Perfil" />
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
                <h3 className="box-title">Usuários</h3>
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
                        <th>Perfil</th>
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
                                <td>{item.perfil_id}</td>
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

export default Usuarios;