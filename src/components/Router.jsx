import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages';
import PokeCard from './PokeCard/PokeCard';

export default function Router() {
    return(
        <Switch>
            <Route path="/" component={ Home }/>
            <PokeCard />
        </Switch>
    )
}