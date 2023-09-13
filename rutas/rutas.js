const express = require("express");
const routes = express.Router();

const imagesController = require('./imagenes.controller');

routes.post(
    "/imagenes/:tabla",
    imagesController.upload,
    imagesController.uploadFile
  );
  
  module.exports = routes;



