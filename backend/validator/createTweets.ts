import {body} from 'express-validator';


export const  createTweetsValidations=[
    body("text","Введите текст твита").isJSON({allow_primitives:undefined}).isLength({
        min:1,
        max:280
    }).withMessage("Максимальная количество символов в твита 280")

];