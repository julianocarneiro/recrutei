import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <Link to="/" className="logo" >
                    <span className="logo-mini"><b>R</b></span>
                    <span className="logo-lg"><b>R</b>ecrutei</span>
                </Link>
                <nav className="navbar navbar-static-top">

                    <a href="fake" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </a>

                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">

                            <li className="dropdown user user-menu">
                                <a href="fake" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="assets/img/user2-160x160.jpg" className="user-image"  alt=""/>
                                        <span className="hidden-xs">Juliano Carneiro</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src="assets/img/user2-160x160.jpg" className="img-circle"  alt=""/>

                                            <p>Juliano Carneiro - Web Developer</p>
                                    </li>

                                    <li className="user-footer">
                                        <div className="pull-right">
                                            <a href="fake" onClick={e => this.props.onLogout(e)} className="btn btn-default btn-flat">Sair</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;
