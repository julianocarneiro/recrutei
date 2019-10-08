import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import tiposSuporteApi from "../../services/tiposSuporteApi";

function TiposSuporte () {

    const [ data, setData ] = useState([]);
    const [ item, setItem ] = useState([]);
    const [ tableVisible, setTableVisible ] = useState(true);

    useEffect(() => {
        onLoad();
    }, [])

    const onLoad = async () => {
        let response = await tiposSuporteApi._all();
        setData(response.data.data);
        return response;
    }

    const onCreate = () => {
        let item = {
            'id' : 0,
            'tipo' : ''
        }
        setItem(item)
        setTableVisible(false);
    }

    const onEdit = (item) => {
        setItem(item)
        setTableVisible(false);
    }

    const onDelete = async (id) => {
        await tiposSuporteApi._delete(id)
        onLoad();
    }

    const onSave = async (item) =>{
        if(item.id === 0) {
            // create
            return await tiposSuporteApi._create(item)
        } else {
            // update
            return await tiposSuporteApi._update(item.id, item)
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
                    Tipos de Suporte
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
    const [ tipo, setTipo ] = useState(info.data.tipo);

    const onSubmit = (e) => {
        return info.onSubmit(e, {
            id, tipo
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
                            <label htmlFor="tipo">Tipo</label>
                            <input
                                onChange={event => setTipo( event.target.value )}
                                value={tipo}
                                type="text" className="form-control" id="tipo" placeholder="Tipo" />
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
                <h3 className="box-title">Tipos de Suporte</h3>
            </div>

            <div className="box-body">
                <button onClick={onCreate} type="button" className="btn btn-success">Novo</button>
                <br /><br />
                <table className="table table-bordered table-hover table-condensed">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Tipo</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.tipo}</td>
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


export default TiposSuporte;
