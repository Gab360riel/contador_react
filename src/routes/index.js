import React from 'react';

import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';

import Home from '../pages/home';
import Redirect from '../pages/redirectPage';

const Routes = () => {
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/redirect" exact component={Redirect} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default withRouter(Routes);