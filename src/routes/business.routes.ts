import * as business from '../controllers/business.controller'

const { check } = require('express-validator');
import express = require('express');

const businessRouter: express.Router = express.Router();

businessRouter.post('/createTypeBusiness', [
    check('name', 'the name is required').not().isEmpty(),
    check('code', 'the code is required').not().isEmpty(),
], business.createTypeBusiness
)

businessRouter.post('/createBusiness', [
    check('name', 'the name is required').not().isEmpty(),
    check('code', 'the code is required').not().isEmpty(),
], business.createBusiness
)

businessRouter.get('/getTypeBusiness', business.getTypeBusiness
)

businessRouter.get('/getBusinessByTypeBusiness/:id', business.getBusinessByTypeBusiness)


export default businessRouter;