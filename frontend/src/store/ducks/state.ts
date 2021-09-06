export enum LoadingState{
 LOADED='LOADED',
 ERROR='ERROR',
 NEVER='NEVER',
 LOADING='LOADING'
};

export enum AddFormState{
 ERROR='ERROR',
 NEVER='NEVER',
 LOADING='LOADING'

}

export interface Tweet{
 _id:string;
 text:string;
 createdAt:string;
 user:{
  fullname:string;
  username:string;
  avatarUrl:string;
 }
};
export interface TweetState{
 items:Tweet[];
 loadingState:LoadingState;
 addFormState:AddFormState;
};