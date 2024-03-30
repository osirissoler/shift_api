import * as business from "../controllers/business.controller";

const { check } = require("express-validator");
import express = require("express");

const businessRouter: express.Router = express.Router();

import * as token from "../middlewares/validate-jwt";

businessRouter.post(
  "/createTypeBusiness",
  [
    check("name", "the name is required").not().isEmpty(),
    check("code", "the code is required").not().isEmpty(),
  ],
  business.createTypeBusiness
);

businessRouter.post(
  "/createBusiness",
  check("name", "the name is required").not().isEmpty(),
  check("code", "the code is required").not().isEmpty(),
  check("typeBusiness", "the typeBusiness is required").not().isEmpty(),
  check("password", "the password is required").not().isEmpty(),
  check("email", "the email is required").not().isEmpty(),
  business.createBusiness
);

businessRouter.get(
  "/getTypeBusiness",
  [token.validarJWT],
  business.getTypeBusiness
);

businessRouter.get(
  "/getBusinessByTypeBusiness/:id",
  [token.validarJWT],
  business.getBusinessByTypeBusiness
);

export default businessRouter;
