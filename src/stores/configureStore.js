import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import thunk from 'redux-thunk';

let store;

export const configureStore = (preloadState) => {
    store = createStore(
        reducers,
        preloadState,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
};

export default function getStore() {
    return store;
}