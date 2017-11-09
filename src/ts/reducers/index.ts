import { combineReducers } from 'redux';
import pages from './pages-reducer';
import lang from './lang-reducer';

export default combineReducers({
  pages,
  lang
});