import * as shifts from '../controllers/shifts.controller'

const { check } = require('express-validator');
import express = require('express');

const shiftsRouter: express.Router = express.Router();

shiftsRouter.post('/createShifts', [
    check('specialists', 'the specialists is required').not().isEmpty(),
    check('services', 'the services is required').not().isEmpty(),
    check('user', 'the user is required').not().isEmpty(),
], shifts.createShifts
)

shiftsRouter.get('/getShiftsNumber/:specialists_id', [], shifts.getShiftsNumber
)

shiftsRouter.post('/verifyShifts', [
    check('specialists', 'the specialists is required').not().isEmpty(),
    check('services', 'the services is required').not().isEmpty(),
    check('user', 'the user is required').not().isEmpty(),
], shifts.verifyShifts
)






export default shiftsRouter;