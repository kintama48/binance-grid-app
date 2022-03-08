require("dotenv");

let apiHandler = require("node-binance-api");
let boughtPrice = null;
let soldPrice = null;
let profitGenerated = null;

async function main(clientSecret, apiKey){


}



setInterval(async function(){
    await main(process.env.CLIENT_SECRET, process.env.API_KEY);
}, 10);

console.log("Running... ");
