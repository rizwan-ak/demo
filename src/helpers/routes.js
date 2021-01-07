import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Test from '../pages/Test';
import Loader from '../components/Loader';
import { connect } from 'react-redux';

function Routes({ loading }) {
    return (
        <>
            {loading && <Loader />}
            <Router>
                <Switch>
                    <Route exact path="/" component={Test} />
                </Switch>
            </Router>
        </>
    );
}

export default connect(state => state)(Routes);
