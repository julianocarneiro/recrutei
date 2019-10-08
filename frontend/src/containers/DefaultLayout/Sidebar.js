import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar">

                <section className="sidebar">

                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">Menu Principal</li>

                        <li><Link to="/dashboard"><i className="fa fa-dashboard"></i> <span>Dashboard</span></Link></li>
                        <li><Link to="/clientes"><i className="fa fa-users"></i> <span>Clientes</span></Link></li>
                        <li><Link to="/tickets"><i className="fa fa-cogs"></i> <span>Tickets</span></Link></li>
                        <li><Link to="/usuarios"><i className="fa fa-user"></i> <span>Usuarios</span></Link></li>
                        <li><Link to="/tipos-suporte"><i className="fa fa-book"></i> <span>Tipos Suporte</span></Link></li>
                        <li><Link to="/tipos-status"><i className="fa fa-book"></i> <span>Tipos Status</span></Link></li>
                        <li><Link to="/perfil"><i className="fa fa-book"></i> <span>Perfil</span></Link></li>

                    </ul>
                </section>
            </aside>
        );
    }
}

export default Sidebar;
