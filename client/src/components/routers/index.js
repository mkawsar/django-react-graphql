import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../lib/Header';
import Login from '../auth/Login';


class ReactRouter extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" header='Home' component={Login} />
                </Switch>
            </div>
        );
    }
}

export default ReactRouter;
