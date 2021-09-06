import { AddFormState, LoadingState, Tweet, TweetState } from "../state";
import { AddTweetActionInterface, FetchAddTweetActionInterface, FetchTweetsActionInterface, SetAddFormStateActionInterface, SetTweetsActionInterface, SetTweetsLoadingStateActionInterface, TweetActionType } from "./actionTypes";

export const fetchTweets=():FetchTweetsActionInterface =>({
 type:TweetActionType.FETCH_TWEETS,
})

export const setTweets=(peyload:TweetState['items']|any):SetTweetsActionInterface =>({
 type:TweetActionType.SET_TWEETS,
 peyload,
});
export const setTweetLoadingState=(peyload:LoadingState):SetTweetsLoadingStateActionInterface=>({
 type:TweetActionType.SET_LOADING_STATE,
 peyload,
});
export const fetchAddTweet=(peyload:string):FetchAddTweetActionInterface=>({
 type:TweetActionType.FETCH_ADD_TWEET,
 peyload
});
export const setAddFormState=(peyload:AddFormState):SetAddFormStateActionInterface=>({
 type:TweetActionType.SET_ADD_FORM_STATE,
 peyload
})
export const addTweet=(peyload:Tweet):AddTweetActionInterface=>({
 type:TweetActionType.ADD_TWEET,
 peyload,
})
