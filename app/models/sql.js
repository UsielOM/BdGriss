const Sequelize = require('sequelize');
const sequelize = new Sequelize("lovecraft", "root", "sasa", {
    host: "localhost",
    dialect: "mariadb",
    port: 3306
});

init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexion con la Base de datos establecida");
    }).catch(err => {
        console.error("Conexion no establecida: ", err);
    })
}

module.exports.init = init;