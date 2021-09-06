import {combineReducers} from 'redux';
import { tagsReducer } from './ducks/actualThemes/reducer';
import { tweetReducer } from './ducks/tweet/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';


export const rootReducers=combineReducers({
 tweets:tweetsReducer,
 tags:tagsReducer,
 tweet:tweetReducer,
 
});