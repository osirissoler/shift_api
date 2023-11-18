import * as specialists from '../controllers/specialist.controller'

const { check } = require('express-validator');
import express = require('express');

const specialistsRouter: express.Router = express.Router();

specialistsRouter.post('/createspecilist', [
    check('name', 'the name is required').not().isEmpty(),
    check('code', 'the code is required').not().isEmpty(),
], specialists.createspecilist
)

specialistsRouter.get('/getSpecialistsByBusiness/:id', [], specialists.getSpecialistsByBusiness
)




export default specialistsRouter;