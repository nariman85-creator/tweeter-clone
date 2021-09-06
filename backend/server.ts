import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import {passport} from './core/pasportos';

import './core/db';
import {userCtrl} from "./controllers/UserController";
import {registerValidations} from "./validator/register";
import {tweetsCtrl} from "./controllers/TweetsController";
import {createTweetsValidations} from "./validator/createTweets";
import {updateTweetsValidations} from "./validator/updateTweet";




const app=express();
app.use(express.json())
app.use(passport.initialize());

app.get('/users',userCtrl.index);
app.get('/users/me',passport.authenticate('jwt',{session:false}),userCtrl.getUserInfo);
app.get('/users/:id',userCtrl.show);

app.get('/tweets',tweetsCtrl.index);
app.get('/tweets/:id',tweetsCtrl.show);
app.post('/tweets',passport.authenticate('jwt'),createTweetsValidations,tweetsCtrl.create);
app.patch('/tweets/:id',passport.authenticate('jwt'),updateTweetsValidations,tweetsCtrl.update);
app.delete('/tweets/:id',passport.authenticate('jwt'),tweetsCtrl.delete);

app.post('/auth/signin',
    passport.authenticate('local'),userCtrl.afterLogin);
app.post('/auth/signup',registerValidations,userCtrl.create);
app.get('/auth/verify',userCtrl.verify);


app.listen(1000,():void=>{
  console.log("server to started");
});