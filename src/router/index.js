import React from 'react'

import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '../App'
import FriendMessage from '../pages/userCenter/message/friendMessage'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/friendMessage' component={FriendMessage} />
        </Switch>
    </HashRouter>
)

export default BasicRoute;