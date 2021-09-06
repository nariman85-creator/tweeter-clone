import {body} from 'express-validator';


export const  registerValidations=[
    body('email',"Введите E-Mail").isEmail().withMessage("Неверный E-Mail").isLength({
        min:10,
        max:40
    }).withMessage("Допустимое количество символов в почте от 10 до 40"),
    body('fullname',"Введите ваше имя").isString().isLength({
        min:2,
        max:40
    }).withMessage("Допустимое количество символов в имени от 2 до 40"),
    body('username',"Укажите ваш логин").isString().isLength({
        min:2,
        max: 40

    }).withMessage("Допустимое количество символов в логине от 2 до 40"),
    body('password',"Введите ваш пароль").isString().withMessage("Неверный E-Mail").isLength({
        min:6,
        max:40
    }).withMessage("Допустимое количество символов в пароле от 6 до 40")
        .custom((value,{req})=>{
            if(value!=req.body.password2){
                throw new Error("Пароли не совподают");
            }else {
                return value;
            }
        })

];