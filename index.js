require("dotenv");

let apiHandler = require("node-binance-api");

console.log(`Running... \nCurrent price of Bitcoin: ${getCurrentPrice()}`)

let sellPrice = prompt("Price to sell?\n");
let buyPrice = prompt("Price to buy?\n");
let stopLoss = prompt("Stop Loss?\\n");

let profitGenerated = null;

async function main(clientSecret, apiKey){

    
}

async function getCurrentPrice(){

}


setInterval(async function(){
    await main(process.env.CLIENT_SECRET, process.env.API_KEY);
}, 10);

