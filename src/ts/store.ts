import { createStore } from 'redux';
import initSubscriber from 'redux-subscriber';
import reducer from './reducers/'

const store = createStore(reducer);
const subscribe = initSubscriber(store);

export default store;