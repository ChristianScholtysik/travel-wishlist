import express from "express";
import { Router } from "express";
import {
  getAllCountries,
  getSingleCountry,
  addNewCountry,
  editCountry,
  deleteCountry,
} from "../controllers/travelControllers.js";

const countriesRouter = Router();
countriesRouter.route("/").get(getAllCountries).post(addNewCountry);

countriesRouter
  .route("/:alphaXCode")
  .get(getSingleCountry)
  .put(editCountry)
  .delete(deleteCountry);

export default countriesRouter;
