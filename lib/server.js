const express = require('express');
const sql = require('./../app/models/sql');
const app = express();
const port = 3000;


app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor listo y escuchando en el puerto: ${port}`);
    sql.init();
});

app.get("/", function(require, response) {
    response.send("Servidor funcionando <(*-*<)");
});