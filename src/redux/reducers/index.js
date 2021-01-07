import AT from '../actions/actionTypes';

const initialState = {
    test: null,
    loading: false,
    error: null,
};

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AT.TEST_CONSTANT:
            return { ...state, test: payload, loading: false, error: null };
        case AT.SET_ERROR:
            return { ...state, loading: false, error: payload };
        case AT.SET_LOADING:
            return { ...state, loading: payload, error: null };
        default:
            return state;
    }
};

export default Reducer;
