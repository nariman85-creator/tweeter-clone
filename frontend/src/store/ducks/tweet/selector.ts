import { RootState } from "../../store";
import { LoadingState, TweetDataState } from "./state";
 export const selectTweet=(state:RootState):TweetDataState=>state.tweet;

export const selectTweetData=(state:RootState):TweetDataState['data']=>selectTweet(state).data;

export const selectIsLoading=(state:RootState):boolean=>selectTweet(state).loadingState===LoadingState.LOADING;
export const selectIsLoaded=(state:RootState):boolean=>selectTweet(state).loadingState===LoadingState.LOADED;

export const selectLoadingState=(state:RootState):LoadingState=>selectTweet(state).loadingState;
