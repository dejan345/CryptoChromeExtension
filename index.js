let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

fetch(url)
  .then(res => res.json())
  .then(data => {
    // console.log('Checkout this JSON! ', out);
    // var data = out;

    document.getElementById('bitcoin-price').innerHTML =
      '$ ' + data[0].price_usd.slice(0, -2);
    document.getElementById('btc-percentage').innerHTML =
      data[0].percent_change_24h + ' %';

    document.getElementById('eth-price').innerHTML =
      '$ ' + data[1].price_usd.slice(0, -4);
    document.getElementById('eth-percentage').innerHTML =
      data[1].percent_change_24h + ' %';

    document.getElementById('ripple-price').innerHTML =
      '$ ' + data[2].price_usd.slice(0, -3);
    document.getElementById('ripple-percentage').innerHTML =
      data[2].percent_change_24h + ' %';

    document.getElementById('litecoin-price').innerHTML =
      '$ ' + data[4].price_usd.slice(0, -3);
    document.getElementById('litecoin-percentage').innerHTML =
      data[4].percent_change_24h + ' %';

    //   change class

    if (data[0].percent_change_24h > 0) {
      document.getElementById('btc-percentage').className = 'green';
    } else {
      document.getElementById('btc-percentage').className = 'red';
    }

    if (data[1].percent_change_24h > 0) {
      document.getElementById('eth-percentage').className = 'green';
    } else {
      document.getElementById('eth-percentage').className = 'red';
    }

    if (data[2].percent_change_24h > 0) {
      document.getElementById('ripple-percentage').className = 'green';
    } else {
      document.getElementById('ripple-percentage').className = 'red';
    }

    if (data[4].percent_change_24h > 0) {
      document.getElementById('litecoin-percentage').className = 'green';
    } else {
      document.getElementById('litecoin-percentage').className = 'red';
    }
  })
  .catch(err => {
    throw err;
  });
