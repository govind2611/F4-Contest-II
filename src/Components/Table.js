import React from 'react';

const Table = ({ coin }) => {
  const priceChangeClass = coin.price_change_percentage_24h < 0 ? 'red' : 'green';

  // Convert market cap change value to an integer
  const marketCapChange = parseInt(coin.market_cap_change_24h);

  return (
    <tr>
      <td>
        <img src={coin.image} alt={coin.name} width="20" height="20" />
      </td>
      <td className="name">{coin.name}</td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price}</td>
      <td>${coin.total_volume}</td>
      <td className={priceChangeClass}>
        {coin.price_change_percentage_24h}%
      </td>
      <td>${marketCapChange}</td>
    </tr>
  );
};

export default Table;




/*sometime the api doen't work it throws error {axios error : ERR_NETWORK}
  it is the error from the backend. this api has limit of fetching the data
*/