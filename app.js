let ws = new WebSocket('wss://fstream.binance.com/ws/btcusdt@trade');
let stockPriceElement = document.getElementById('stock-price')
let lastprice = null;


ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = stockObject.p;

    // add color to stopck-price 
    if (price == lastprice) {
        stockPriceElement.style.color = 'black';
    } else if (price > lastprice) {
        stockPriceElement.style.color = 'green';
    } else {
        stockPriceElement.style.color = 'red';
    }
    
    // set the price to stock-price element
    stockPriceElement.innerText = price;
    lastprice = price;
};