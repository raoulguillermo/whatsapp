/*
Next js uses this config to set all project wide settings. 
To keep it secure we've set up a .env file with all nescecary urls and variables. 

The .env file can be found in the root of the app directory 
*/

//this package is used to be able to read the .env file
require("dotenv").config();

module.exports = {
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    APPID: process.env.APPID,
    MEASUREMENTID: process.env.MEASUREMENTID,
  },
};
