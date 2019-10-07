import React, { Component } from 'react';

class Page500 extends Component {
  render() {
    return (
        <div className="container">
          <section className="content-header">
            <h1>
              500 Error Page
            </h1>
          </section>

          <section className="content">

            <div className="error-page">
              <h2 className="headline text-red">500</h2>

              <div className="error-content">
                <h3><i className="fa fa-warning text-red"></i> Oops! Algo deu errado.</h3>

                <form className="search-form">
                  <div className="input-group">
                    <input type="text" name="search" className="form-control" placeholder="Pesquisar" />

                      <div className="input-group-btn">
                        <button type="submit" name="submit" className="btn btn-danger btn-flat"><i
                            className="fa fa-search"></i>
                        </button>
                      </div>
                  </div>

                </form>
              </div>
            </div>

          </section>

        </div>
    );
  }
}

export default Page500;
