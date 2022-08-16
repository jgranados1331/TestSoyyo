const {check} = require('express-validator');
import validateResult from '../helper/validateHelper';


const validatePost = [
    check('startId')
    .isInt({min: 1, max:20})
    .not()
    .isEmpty(),
    check('endId')
    .isInt({min: 1, max:20})
    .not()
    .isEmpty(),
    (req,res,next) => {
        validateResult(req,res,next)
    }
]
 
module.exports={validatePost}