// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    if (currency >= 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    if (currency >= 50) {
        result["H"] = Math.floor( currency / 50 );
        currency %= 50;
        // console.log(currency);
    }
    if (currency >= 25) {
        result["Q"] = Math.floor( currency / 25 );
        currency %= 25;
        // console.log(currency);
    }
    if (currency >= 10) {
        result["D"] = Math.floor( currency / 10 );
        currency %= 10;
        // console.log(currency);
    }
    if (currency >= 5) {
        result["N"] = Math.floor( currency / 5 );
        currency %= 5;
        // console.log(currency);
    }
    if (currency >= 1) {
        result["P"] = currency;
        // console.log(currency);
    }
    if (currency < 1) {
        return result;
    }
    return result;
}
