import React, { useEffect } from 'react';

import api from '../../services/api';

function Dashboard (){

    useEffect(() => {

        let response = {}

        async function loadData(){
            const USER_TOKEN = localStorage.getItem('token');
            const AuthStr = 'Bearer '.concat(USER_TOKEN)
            response = await  api.get('/cliente', { headers: { Authorization: AuthStr } })
        }

            console.log(response)

        loadData();

    }, [])


    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Dashboard
                    <small>Seja bem vindo...</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="fake"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li className="active">Dashboard</li>
                </ol>
            </section>

            <section className="content">

                <div className="box">
                    <div className="box-header with-border">
                        <h3 className="box-title">Métricas</h3>

                        <div className="box-tools pull-right">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse"
                                    data-toggle="tooltip"
                                    title="Collapse">
                                <i className="fa fa-minus"></i></button>
                            <button type="button" className="btn btn-box-tool" data-widget="remove"
                                    data-toggle="tooltip" title="Remove">
                                <i className="fa fa-times"></i></button>
                        </div>
                    </div>
                    <div className="box-body">
                        wigets de metricas
                    </div>

                </div>

            </section>
        </div>
    );

}

export default Dashboard;
