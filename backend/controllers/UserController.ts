import express from "express";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import UserModal, {UserModalInterface, UserSchemaInterface} from "../modals/UserModal";
import {validationResult} from "express-validator";
import {generateMD5} from "../utils/generateHash";
import {sendEmail} from "../utils/sendEmail";

const isValidObjectId=mongoose.Types.ObjectId.isValid;
class UserController{
   async index(_:express.Request,res:express.Response):Promise<void>{
       try{
           const users=await  UserModal.find({}).exec();
            res.json({
                status:"success",
                data:users
            });

       }catch (error) {
           res.json({
               status:"error",
               message:JSON.stringify(error)
           });
       }
    };
   async create(req:express.Request,res:express.Response):Promise<void>{
       try{
           const errors=validationResult(req);
           if(errors.isEmpty()){
               res.status(400).json({status:"error",errors:errors.array()});
               return ;
           };
           const data:UserSchemaInterface={
               email:req.body.email,
               fullname:req.body.fullname,
               username:req.body.username,
               password:generateMD5(req.body.password+process.env.SECRET_KEY),
               confirmed_hash:generateMD5(process.env.SECRET_KEY || Math.random().toString())
           };
           const user= await UserModal.create(data);
           sendEmail({
               emailFrom:"admin@example.com",
               emailTo:data.email || "",
               subject:"Потверждение почты Twitter Clone Tutorial",
               html:`Для того чтобы подтвердить почту,перейдите по <a href="http://localhost:1000/users/
               verify?hash=${data.confirmed_hash}">по этой ссылке</a>`

           },(err:Error|null)=>{
               if (err){
                   res.json({
                       status:"error",
                       errors:err
                   });
               }else {
                   res.status(201).json({
                       status:"success",
                       data:user
                   });

               }
           });


       }catch (error) {
           res.json({
               status:"error",
               message:error
           })
       }
   };
    async verify(req:express.Request,res:express.Response):Promise<void>{
        try{
            const hash=req.query.hash;
            if(!hash){
                res.status(400).send();
                return ;
            }
            const user= await UserModal.findOne({confirmed_hash:hash}).exec();
            if(user){
                user.confirmed=true;
                user.save();
                res.json({
                    status:"success",
                });

            }else {
                res.status(404).json({
                    status:"error",
                    message:"Пользователь не найден"
                });
            }

        }catch (error) {
            res.json({
                status:"error",
                message:JSON.stringify(error)
            });
        }
    };
    async show(req:express.Request,res:express.Response):Promise<void>{
        try{
            const userId=req.params.id;
            if(!isValidObjectId(userId)){
                res.status(400).send();
                return ;
            };
            const user=await  UserModal.findById(userId).exec();
            if(!user){
                res.status(400).send();
                return ;
            };

            res.json({
                status:"success",
                data:user
            });

        }catch (error) {
            res.json({
                status:"error",
                message:error
            });
        }
    };
    async verification(req:express.Request,res:express.Response):Promise<void>{
        

}


    async  update(req:express.Request,res:express.Response){

   }
   async  delete(req:express.Request,res:express.Response){}
    async afterLogin(req:express.Request,res:express.Response){
        try{
            const user=req.user?(req.user as UserModalInterface).toJSON():undefined;
            if(!user){
                res.json({
                    status:"error"
                })
            }
            res.json({
                status:"success",
                data:{
                    ...user,
                    token:jwt.sign({data:user},process.env.SECRET_KEY || "123",{
                        expiresIn:"30 days"
                    })
                }
            })

        }catch (e) {

        }
    }
    async getUserInfo(req:express.Request,res:express.Response){
        try{
            const user=req.user?(req.user as UserModalInterface).toJSON():undefined;
            if(!user){
                res.status(404).json({
                    status:"error"
                })
            }
            res.json({
                status:"success",
                data:user
            });

        }catch (error) {
    res.status(500).json({
        status:"error",
        message:error
    })
        }
    }

}

export const userCtrl=new UserController();