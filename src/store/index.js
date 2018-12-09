const configureStore = require('./configureStore').default;

const initialState = window.INITIAL_STATE;
delete window.INITIAL_STATE;

const storeInstance = configureStore(initialState);

module.exports = storeInstance;
