import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import perfilApi from "../../services/perfilApi";

function TiposStatus () {

    const [ data, setData ] = useState([]);
    const [ item, setItem ] = useState([]);
    const [ tableVisible, setTableVisible ] = useState(true);

    useEffect(() => {
        onLoad();
    }, [])

    const onLoad = async () => {
        let response = await perfilApi._all();
        setData(response.data.data);
        return response;
    }

    const onCreate = () => {
        let item = {
            'id' : 0,
            'perfil' : '',
            'tecnico' : false
        }
        setItem(item)
        setTableVisible(false);
    }

    const onEdit = (item) => {
        setItem(item)
        setTableVisible(false);
    }

    const onDelete = async (id) => {
        await perfilApi._delete(id)
        onLoad();
    }

    const onSave = async (item) =>{
        if(item.id === 0) {
            // create
            return await perfilApi._create(item)
        } else {
            // update
            return await perfilApi._update(item.id, item)
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
                    Perfil
                    <small>Seja bem vindo...</small>
                </h1>
                <ol className="breadcrumb">
                    <li><Link to="/dashboard"><i className="fa fa-dashboard"></i> Home</Link></li>
                    <li className="active">Tipos de Status</li>
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
    const [ perfil, setPerfil ] = useState(info.data.perfil);
    const [ tecnico, setTecnico ] = useState(info.data.tecnico);

    const onSubmit = (e) => {
        return info.onSubmit(e, {
            id, perfil, tecnico
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
                            <label htmlFor="perfil">Perfil</label>
                            <input
                                onChange={event => setPerfil( event.target.value )}
                                value={perfil}
                                type="text" className="form-control" id="perfil" placeholder="Perfil" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tecnico">Técnico</label>
                            <input
                                onChange={event => setTecnico( event.target.value )}
                                value={tecnico}
                                type="text" className="form-control" id="tecnico" placeholder="Tecnico" />
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
                <h3 className="box-title">Perfil</h3>
            </div>

            <div className="box-body">
                <button onClick={onCreate} type="button" className="btn btn-success">Novo</button>
                <br /><br />
                <table className="table table-bordered table-hover table-condensed">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Perfil</th>
                        <th>Técnico</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.perfil}</td>
                                <td>{item.tecnico}</td>
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


export default TiposStatus;
