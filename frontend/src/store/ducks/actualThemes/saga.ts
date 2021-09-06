import {call, put, takeEvery} from 'redux-saga/effects';
import { TagsApi } from '../../../services/api/tagsApi';
import { setTagsLoadingState, setTagss, TagsActionType } from './actionCreators';
import { LoadingState, Tag } from './state';






export function* fetchTagsRequest(){
try{
 const data:Tag[]=yield call(TagsApi.fetchTags);
yield put(setTagss(data));
}catch(e){
yield put(setTagsLoadingState(LoadingState.ERROR));
}
};


export function* tagsSaga(){
 yield takeEvery(TagsActionType.FETCH_ITEMS,fetchTagsRequest);
};