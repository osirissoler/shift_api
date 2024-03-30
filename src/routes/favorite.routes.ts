import * as favorite from "../controllers/favorite.controller";
const { check } = require("express-validator");
import express = require("express");

const favoriteRouter: express.Router = express.Router();

import * as token from '../middlewares/validate-jwt'

favoriteRouter.post(
  "/createFovorite",
  [token.validarJWT],
  [
    check("business", "the business is required").not().isEmpty(),
    check("user", "the user is required").not().isEmpty(),
  ],
  favorite.createFovorite
);

favoriteRouter.get("/getFovorite/:isFavorite",[token.validarJWT], favorite.getFovorite);

favoriteRouter.get("/getMyFavoriteBusiness/:business/:user",[token.validarJWT], favorite.getMyFavoriteBusiness);

export default favoriteRouter;
