import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Details from '../pages/Details';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/details/:movieid' component={Details} />
    </Switch>
)

export default Routes;
