import { all } from "@redux-saga/core/effects";
import { tagsSaga } from "./ducks/actualThemes/saga";
import { watchIncrementAsync } from "./ducks/tweets/saga";
import {tweetSaga} from "./ducks/tweet/saga";

export default function* rootSaga(){
 yield all([
  watchIncrementAsync(),
  tagsSaga(),
  tweetSaga(),
 ])
}