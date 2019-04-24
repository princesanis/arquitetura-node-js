const request = require('request');

const api_token = '0Y9HK7iFzSYvivcwa1GpfQTCxNSckSUJ8anS6ynvZTbogVcDvqBEkMgsfJS4';

const cotacao = (symbol, callback) => {

    const url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`

    request({url, json: true}, (err, response, body) => {

        if(err){
            throw new Error(`Something went wrong: ${err}`)
        }

        if(response.body.data === undefined){
            throw new Error(`No data found`)
        }

        const parsedJSON = response.body.data[0]

        const {symbol, price_open, price, day_high, day_low} = parsedJSON

        const data = {symbol, price_open, price, day_high, day_low}

        callback.send(data)
    });
}

module.exports = cotacao