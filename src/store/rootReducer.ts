import { combineReducers } from '@reduxjs/toolkit';
import projects from './projects';
import languages from './languages';

const rootReducer = combineReducers({
  projects,
  languages
});

export default rootReducer;
