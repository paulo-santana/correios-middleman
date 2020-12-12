const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  const params = req.query;
  console.log(params);
  const response = await axios.get(
    "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx",
    {
      params,
    }
  );
  console.log(response);
  res.header("Content-Type", "text/xml");
  res.send(response.data);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("escutando");
});
