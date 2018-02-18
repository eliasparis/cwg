import { combineReducers } from 'redux';
import pages from './pages-reducer';
import lang from './lang-reducer';
import events from './events-reducer';

export default combineReducers({
  pages,
  lang,
  events
});