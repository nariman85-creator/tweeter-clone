import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, TagsState } from "./state";
 export const selectTags=(state:RootState):TagsState=>state.tags;
export const selectTagsItems=createSelector(selectTags,tweets=>tweets.items);
export const selectIsLoading=(state:RootState):boolean=>selectTags(state).loadingState===LoadingState.LOADING;
export const selectIsLoaded=(state:RootState):boolean=>selectTags(state).loadingState===LoadingState.LOADED;

export const selectLoadingState=(state:RootState):LoadingState=>selectTags(state).loadingState;