import { applyMiddleware, compose, createStore } from "redux";
import { rootReducers } from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import { TweetState } from "./ducks/state";
import { TagsState } from "./ducks/actualThemes/state";
import { TweetDataState } from "./ducks/tweet/state";
declare global {
 interface Window {
   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
 }
};
const composeEnchancer=(typeof window!=='undefined'&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
||compose;
export interface RootState{
 tweets:TweetState;
 tags:TagsState;
 tweet:TweetDataState;
};
const sagaMiddleware=createSagaMiddleware();
const store=createStore(rootReducers,composeEnchancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export default store;