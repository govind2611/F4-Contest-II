import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Table from "./Components/Table";

/*Method 1 :- using axios*/
const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        setCoins(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  /*using fetch and .then method*/

  // const App = () => {
  //   const [coins, setCoins] = useState([]);

  //   const fetchData = () => {
  //     fetch(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  //     )
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setCoins(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div className="main">
      <h1>Top 10 Cryptocurrencies</h1>
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
            <th>Price Change</th>
            <th>Market Cap</th>

          </tr>
        </thead>
        <tbody>
          {coins.map((item) => (
            <Table key={item.id} coin={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

/*sometime the api doen't work it throws error {axios error : ERR_NETWORK}
  it is the error from the backend. this api has limit of fetching the data
*/
