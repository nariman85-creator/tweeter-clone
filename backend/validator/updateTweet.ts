import {body} from 'express-validator';


export const  updateTweetsValidations=[
    body("text","Введите текст твита").isString().isLength({
        min:1,
        max:280
    }).withMessage("Максимальная количество символов в твита 280")

];