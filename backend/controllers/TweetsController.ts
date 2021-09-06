import mongoose from "mongoose";
import express from "express";
import {validationResult} from "express-validator";
import {TweetModalInterface, TweetModel} from "../modals/TweetModal";
import {UserModalInterface, UserSchemaInterface} from "../modals/UserModal";

const isValidObjectId=mongoose.Types.ObjectId.isValid;

class TweetsController {
    async index(req: express.Request, res: express.Response): Promise<void> {
        try {
            const tweets = await TweetModel.find({}).populate('user').exec();
            res.json({
                status: "success",
                data: tweets
            })

        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error
            })
        }
    }

    async show(req: express.Request, res: express.Response): Promise<void> {
        try {
            const tweetId = req.params.id;
            if (!isValidObjectId(tweetId)) {
                res.status(400).send();
                return;
            }
            ;
            const tweet = await TweetModel.findById(tweetId).populate('user').sort({'createdAt': '-1'}).exec();
            if (!tweet) {
                res.status(404).send();
                return;
            };


            res.json({
                status: "success",
                data: tweet
            });

        } catch (error) {
            res.json({
                status: "error",
                message: error
            });
        }

    }

async create(req:express.Request,res:express.Response){
        try{
            const user=req.user as UserModalInterface;
            if(user){
                const errors=validationResult(req);
                if(errors.isEmpty()){
                    res.status(400).json({
                        status:"error",
                        errors:errors.array()
                    });
                    return;
                }
                const data:any={
                    text:req.body.text,
                    user:user._id
                }
                const tweet=await TweetModel.create(data);
                res.json({
                    status:"success",
                    data:await tweet.populate('user').execPopulate()
                });
            }
        }catch (error) {
           res.status(500).send();
        }
};
async update(req:express.Request,res:express.Response){
    const user=req.user as UserSchemaInterface;
    const text=req.body.text;
    try{
        if (user){
            const twetId=req.params.id;
            if(!isValidObjectId(twetId)){
                res.status(400).send();
                return;
            };
            const tweet=await TweetModel.findById(twetId);
            if(tweet ){
                if( String(tweet.user._id)===String(user._id)){

                    tweet.text=text;
                    tweet.save();
                    res.json();

                }else{
                    res.status(403).send
                }
            }else {
            res.status(404).send();
        }
        };

    }catch (error) {
        res.status(500).json({
            status:"error",
            message:error
        });

    }
};
    async delete(req:express.Request,res:express.Response){
        const user=req.user as UserSchemaInterface;
        try{
            if (user){
                const twetId=req.params.id;
                if(!isValidObjectId(twetId)){
                    res.status(400).send();
                    return;
                };
                const tweet=await TweetModel.findById(twetId);
                if(tweet ){
                    if( String(tweet.user._id)===String(user._id)){
                        tweet.remove();
                        res.send();

                    }else{
                        res.status(403).send
                    }
                }else {
                    res.status(404).send();
                }
            };

        }catch (error) {
            res.status(500).json({
                status: "error",
                message: error
            });
        }
    };


}
export const tweetsCtrl=new TweetsController();