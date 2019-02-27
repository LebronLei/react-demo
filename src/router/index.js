import React from 'react';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from '../App';
import FriendMessage from '../pages/userCenter/message/friendMessage';

import AllTask from '../pages/userCenter/allTask/allTask';

import ProductCenter from '../pages/productCenter';
import Home from '../pages/home';
import Solution from '../pages/solution';

// import CommonHeader from '../components/header/commonHeader';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact render={() => <Redirect to="/home" />} />

            <Route exact path="/home" component={Home} />
            <Route exact path="/friendMessage" component={FriendMessage} />
            <Route exact path="/allTask" component={AllTask} />
            <Route exact path="/productCenter" component={ProductCenter} />
            <Route exact path="/solution" component={Solution} />
        </Switch>
    </HashRouter>
);

export default BasicRoute;
