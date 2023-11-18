import * as reviews from '../controllers/reviews.controller'

const { check } = require('express-validator');
import express = require('express');

const reviewsRouter: express.Router = express.Router();

reviewsRouter.post('/createReviews', [
    check('description', 'the nadescriptionme is required').not().isEmpty(),
    check('user', 'the user is required').not().isEmpty(),
    check('specialists', 'the specialists is required').not().isEmpty(),
], reviews.createReviews
)

reviewsRouter.get('/getReviewsByspecialist/:specialists_id', [], reviews.getReviewsByspecialist)
// galleryRouter.get('/getGalleryByServices/:skip/:limit/:services_id', [], gallery.getGalleryByServices)


export default reviewsRouter;