const express = require("express");
const axios = require("axios");
const xml = require("xml");

const app = express();

app.get("/", async (req, res) => {
  const params = req.query;
  console.log(params);
  const response = await axios.get(
    "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx",
    {
      params,
    }
  );

  res.send(xml(response.data));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("escutando");
});
