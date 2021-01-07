import Routes from './helpers/routes';

import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    );
}

export default App;
