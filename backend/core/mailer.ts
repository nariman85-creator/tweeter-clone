import nodemailer from 'nodemailer';

const options={
    host:process.env.NODEMAILER_HOST || "smtp.mailtrap.io",
    port:Number(process.env.NODEMAILER_PORT) || 25,
     auth:{
         user: process.env.NODEMAILER_USER,
         password: process.env.NADEMAILER_PASS
     }

};
const transport =nodemailer.createTransport(options);
export  default  transport;