// declare routes
const test = require("./test.js");
//
const express = require("express");

const configRoute = (app) => {
    app.use('/test', test);
};

module.exports = configRoute;