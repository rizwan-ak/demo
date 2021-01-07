import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AC from '../redux/actions/actionCreater';

function Test({ testFunction, test }) {
    useEffect(() => {
        testFunction();
    }, [testFunction]);

    return (
        <div>
            <span>{test.title}</span>
        </div>
    );
}
export default connect(state => state, { testFunction: AC.testFunction })(Test);
