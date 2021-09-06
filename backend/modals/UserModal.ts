import mongoose,{Schema,model,Document} from 'mongoose';
export interface  UserSchemaInterface{
    _id?:string;
    email:string;
    fullname:string;
    username:string;
    password:string;
    location?:string;
    confirmed?:boolean;
    confirmed_hash?:any;
    about?:string;
    website?:string;

};
export type UserModalInterface=UserSchemaInterface & Document;

const UserSchema=new Schema<UserSchemaInterface>({
    email:{
        unique:true,
        required:true,
        type:String
    },
    fullname:{
        required:true,
        type:String

    },
    username:{
        unique:true,
        required:true,
        type:String
    },
    location:String,
    password:{
        required:true,
        type:String,

    },
    confirmed:{
        type:Boolean,
        default:false
    },
    confirmed_hash:{
        required:true,
        type:String,

    },
    about:String,
    website:String,
},
    {timestamps:true});
UserSchema.set('toJSON',{
    transform:function (_:any,odj:any){
        delete odj.password;
        delete  odj.confirmed_hash;
        return odj;

    }
})
const UserModal=model<UserModalInterface>('User',UserSchema);

export default UserModal;