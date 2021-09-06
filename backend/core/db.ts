import mongoose from 'mongoose';

mongoose.Promise=Promise;
mongoose.connect("mongodb://localhost:27017/twitter",{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;


db.on('error',console.error.bind(console,'connection error'));


export {db,mongoose};