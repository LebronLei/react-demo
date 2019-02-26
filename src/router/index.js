import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '../App';
import FriendMessage from '../pages/userCenter/message/friendMessage';

import AllTask from '../pages/userCenter/allTask/allTask';

import ProductCenter from '../pages/productCenter';

// import CommonHeader from '../components/header/commonHeader';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/friendMessage" component={FriendMessage} />
            <Route exact path="/allTask" component={AllTask} />
            <Route exact path="/productCenter" component={ProductCenter} />
            {/* </Route> */}
        </Switch>
    </HashRouter>
);

export default BasicRoute;
