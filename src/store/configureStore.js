import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
console.log(rootReducer)
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['itemsList', 'activeIndex']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const createStoreWithMiddleware = composeEnhancers()(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(persistedReducer, initialState);
    const persistor = persistStore(store);

    return { store, persistor };
}
