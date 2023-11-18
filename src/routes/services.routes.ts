import * as services from '../controllers/services.controller'

const { check } = require('express-validator');
import express = require('express');

const servicesRouter: express.Router = express.Router();

servicesRouter.post('/createService', [
    check('name', 'the name is required').not().isEmpty(),
    check('price', 'the price is required').not().isEmpty(),
    check('time', 'the time is required').not().isEmpty(),
    check('specialists', 'the specialists is required').not().isEmpty(),
], services.createService
)

servicesRouter.get('/getServiceBySpecialist/:specialist_id', [
   
], services.getServiceBySpecialist
)






export default servicesRouter;