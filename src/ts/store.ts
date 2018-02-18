import { createStore, applyMiddleware } from 'redux';
import initSubscriber from 'redux-subscriber';
import ReduxThunk from 'redux-thunk'
import reducer from './reducers/'

const store = createStore(reducer, applyMiddleware(ReduxThunk));
const subscribe = initSubscriber(store);

export default store;