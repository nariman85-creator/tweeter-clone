import { type } from "node:os";
import { Action } from "redux";
import {  LoadingState, Tag, TagsState } from "./state";

export enum TagsActionType{
 SET_ITEMS='tags/SET_ITEMS',
 FETCH_ITEMS='tags/FETCH_ITEMS',
 SET_LOADING_STATE='tags/SET_LOADING_STATE',
 
};
export interface SetTagsLoadingStateActionInterface{
 type:TagsActionType.SET_LOADING_STATE;
 peyload:LoadingState;

}

export interface SetTagsActionInterface extends Action<TagsActionType>{
 type:TagsActionType.SET_ITEMS;
 peyload:TagsState['items'];
};
export interface FetchTagssActionInterface extends Action<TagsActionType>{
type:TagsActionType.FETCH_ITEMS,
peyload?:any,
};
export const fetchTagss=():FetchTagssActionInterface =>({
 type:TagsActionType.FETCH_ITEMS,
 peyload:[]
});

export const setTagss=(peyload:TagsState['items']):SetTagsActionInterface =>({
 type:TagsActionType.SET_ITEMS,
 peyload,
});
export const setTagsLoadingState=(peyload:LoadingState):SetTagsLoadingStateActionInterface=>({
 type:TagsActionType.SET_LOADING_STATE,
 peyload,
});
export type TagsAction=SetTagsActionInterface | FetchTagssActionInterface |SetTagsLoadingStateActionInterface;
