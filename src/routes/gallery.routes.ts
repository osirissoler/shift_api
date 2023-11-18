import * as gallery from '../controllers/gallery.controller'

const { check } = require('express-validator');
import express = require('express');

const galleryRouter: express.Router = express.Router();

galleryRouter.post('/createService', [
    check('url', 'the name is required').not().isEmpty(),
    check('specialists', 'the specialists is required').not().isEmpty(),
    check('services', 'the services is required').not().isEmpty(),
], gallery.createGallery
)

galleryRouter.get('/getGalleryBySpecialits/:skip/:limit/:specialist_id', [], gallery.getGalleryBySpecialits)
galleryRouter.get('/getGalleryByServices/:skip/:limit/:services_id', [], gallery.getGalleryByServices)


export default galleryRouter;