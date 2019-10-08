import React, { Component } from 'react';


import  Header from './Header';
import  Sidebar from './Sidebar';
import  Content from './Content';
import  Footer from './Footer';

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
        <div className="wrapper">
          <Header onLogout={e=>this.signOut(e)} />
          <Sidebar />
          <Content />
          <Footer />
          <div className="control-sidebar-bg"></div>
        </div>
    );
  }
}

export default DefaultLayout;
