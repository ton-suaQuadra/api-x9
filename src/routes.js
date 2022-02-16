const express = require("express");
const routes = express.Router();

routes.get('/test', (req, res) => {
   return res.json({test: 'test'})
})

module.exports = routes;