import passport  from "passport";
import {Strategy as LocalStrategy} from 'passport-local'
import UserModal, {UserModalInterface} from "../modals/UserModal";
import {Error} from "mongoose";
import {generateMD5} from "../utils/generateHash";

passport.use(new LocalStrategy(
    async (username, password, done):Promise<void> =>{
try{
   const user=await UserModal.findOne({$or:
    [{
        email:username
    },{username}]
}).exec();
    console.log(user?.password);
if(!user){
    return done(null,false,{ message: 'Incorrect username.' });
}
    if(user.password===generateMD5(password+process.env.SECRET_KEY)){
       return  done(null,user);

    }else {
     return  done(null,false);
    }

}catch (e) {
     done(JSON.stringify(e),false);
}
    }
));
passport.serializeUser((user:any, done)=>{
        done(null, user._id);


});

passport.deserializeUser(function(id, done) {
    UserModal.findById(id, function(err:Error, user:UserModalInterface) {
        done(err, user);
    });
});

export {passport};