import { Tweet, TweetState } from "../../store/ducks/state";
import {axios} from '../../core/axios';
interface Response<T>{
 status:string;
 data:T;
}
export const TweetsApi={
 fetchTweets():Promise<Tweet[]>{
  return axios.get<Response<Tweet[]>>('/tweets').then(({data}):any=>data.data);
 },
 fetchTweetData(id:string):Promise<Tweet>{
  return axios.get<Response<Tweet>>(`/tweets/${id}`).then(({data}):any=>data.data);
 },
 fetchAddTweet(peyload:string | any):Promise<Tweet>{
  return axios.post<Response<Tweet>>('/tweets', {text:peyload}).then(({data})=>data.data);
 }
}