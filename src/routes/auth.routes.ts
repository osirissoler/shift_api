import * as auth from '../controllers/auth.controller'

const { check } = require('express-validator');
import express = require('express');

const authRouter: express.Router = express.Router();

authRouter.post('/loginApp', [
    check('email', 'the email is required').not().isEmpty(),
    check('password', 'the code is required').not().isEmpty(),
    ], auth.loginApp
)


export default authRouter;