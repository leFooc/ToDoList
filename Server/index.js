// import internal modules

// import external modules
const express = require("express");
require('dotenv').config();

// config the app
const port = process.env.PORT || 8080;
const app = express();

app.listen(port, (error) => {
    if (error) console.log(error);
    else {
        console.log(`----  Server is running on port: ${port}  ----`);
        console.log("Option: ");
        console.log("* Ctrl + C:        shutdown server");
    }
})