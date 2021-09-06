import passport from 'passport';
import {Strategy as LocalStrategy} from "passport-local";
import {ExtractJwt,Strategy as JWTstrategy} from 'passport-jwt';
import UserModal, {UserModalInterface} from "../modals/UserModal";
import {Error} from "mongoose";
import {generateMD5} from "../utils/generateHash";

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function(username, password, done) {
        const user=UserModal.findOne({$or: [{email: username}, {username}] }, function(err:Error, user:any) {
            if (err) { return done(err); }
            if (!user) {
                 done(null, false, { message: 'Incorrect email.' });
            }
            const pass=user.password;
            if(!pass){
                return  null;
            }
            if(pass===generateMD5(password+process.env.SECRET_KEY)){
                return  done(null,user);

            }else {
                return  done(null,false);
            }

            return done(null, user);
        });
    }
));
passport.use(
    new JWTstrategy({
        secretOrKey:process.env.SECRET_KEY || '123',
        jwtFromRequest:ExtractJwt.fromHeader('token')
    },
        async(peyload:{data:UserModalInterface},done:any)=>{
        try{
            const user=await UserModal.findById(peyload.data._id);
            if(user){
                done(null,user);
                return;
            }
            done(null,false);
        }catch (e) {
            done(e);
        }
        }
    )
)
passport.serializeUser((user:any, done)=>{
    done(null, user._id);


});

passport.deserializeUser(function(id, done) {
    UserModal.findById(id, function(err:Error, user:any) {
        done(err, user);
    });
});
export {passport};