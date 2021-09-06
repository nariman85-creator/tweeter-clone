import {Schema,model,Document} from "mongoose";
import {UserModalInterface} from "./UserModal";

export interface TweetModalInterface{
    _id?:string;
    text:string;
    user:UserModalInterface ;
};

export type TweetModalDocumentInterface=TweetModalInterface & Document;
const userSchema=new Schema<TweetModalInterface>({
    text:{
        required:true,
        type:String,
        maxlength:280
    },
    user:{
        required: true,
        ref:"User",
        type:Schema.Types.ObjectId
    }
},
    {
        timestamps:true
    });
export const TweetModel=model<TweetModalDocumentInterface>('Tweet',userSchema);