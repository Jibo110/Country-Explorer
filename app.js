const container = document.getElementById("crypto-container");

const coins = "bitcoin,ethereum,binancecoin,solana,dogecoin";

async function getCrypto() {

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coins}`
  );

  const data = await res.json();

  container.innerHTML = "";

  data.forEach(coin => {

    const change = coin.price_change_percentage_24h.toFixed(2);
    const color = change >= 0 ? "green" : "red";

    const card = document.createElement("div");
    card.className = "crypto-card";

    card.innerHTML = `
      <img src="${coin.image}" />
      <h2>${coin.name}</h2>
      <p>Price: $${coin.current_price.toLocaleString()}</p>
      <p>Market Cap: $${coin.market_cap.toLocaleString()}</p>
      <p class="${color}">
        24h Change: ${change}%
      </p>
    `;

    container.appendChild(card);
  });

}

// Refresh every 30 seconds
setInterval(getCrypto, 30000);

getCrypto();
