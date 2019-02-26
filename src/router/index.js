import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '../App';
import FriendMessage from '../pages/userCenter/message/friendMessage';

import AllTask from '../pages/userCenter/allTask/allTask';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/friendMessage" component={FriendMessage} />
            <Route exact path="/allTask" component={AllTask} />
        </Switch>
    </HashRouter>
);

export default BasicRoute;
