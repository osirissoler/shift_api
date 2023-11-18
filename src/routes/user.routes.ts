import * as user from '../controllers/user.controller'

const { check } = require('express-validator');
import express = require('express');

const userRouter: express.Router = express.Router();

userRouter.post('/createUser', [
    check('name', 'the name is required').not().isEmpty(),
    check('code', 'the code is required').not().isEmpty(),
    ], user.createUser
)


export default userRouter;