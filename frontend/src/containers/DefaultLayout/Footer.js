import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 0.1.0 Beta
                </div>
                <strong>Copyright &copy; 2019 <a href="http://ubersystem.com.br">Ubersystem</a>.</strong> Todos os direitos reservados
            </footer>
        );
    }
}

export default Footer;
