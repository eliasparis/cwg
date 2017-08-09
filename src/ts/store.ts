import { createStore } from 'redux';
import reducer from './reducers/'

const store = createStore(reducer);

export default store;



// // or you can just import "subscribe" function from the package
// import {subscribe} from 'redux-subscriber';

// const unsubscribe = subscribe('user.messages.count', state => {
//     // do something
// });

// // if you want to stop listening to changes
// unsubscribe();