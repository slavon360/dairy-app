import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import DairyAppPage from './containers/DairyAppPage';
import { store, persistor } from './store';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <div className="App">
                <DairyAppPage />
              </div>
            </PersistGate>
        </Provider>
    );
  }
}

export default App;
