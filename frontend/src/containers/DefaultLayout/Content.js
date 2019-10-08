import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../routes';

class Content extends Component {

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {
        return (
            <>
                <Suspense fallback={this.loading()}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} />
                                    )} />
                            ) : (null);
                        })}
                        <Redirect from="/" to="/dashboard" />
                    </Switch>
                </Suspense>

            </>
        );
    }
}

export default Content;
