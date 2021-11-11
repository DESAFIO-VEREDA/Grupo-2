import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages';

export default function Router() {
    return(
        <Switch>
            <Route path="/" component={ Home }/>
        </Switch>
    )
}
